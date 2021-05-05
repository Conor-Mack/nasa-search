import React, { useEffect, useState, useContext, useMemo } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { Pager, Image, Loader } from "../components";
import { ImageStoreContext } from "../store";
import api from "../api";
import { observer } from "mobx-react-lite";
import { MaxWidthContainer } from "../utils/styles";
import styled from "styled-components";
import { toJS } from "mobx";

interface SearchResultsProps extends RouteComponentProps {
  query?: string;
  page?: string;
}

const SearchResults: React.FC<SearchResultsProps> = observer(
  ({ query = "", page = "1" }) => {
    const [loading, setLoading] = useState(false);

    const store = useContext(ImageStoreContext);

    const images = useMemo(
      () =>
        toJS(store.nasaImages).map(({ title, href }) => (
          <Image key={href} src={href} alt={title} height="100%" width="100%" />
        )),
      [store.nasaImages]
    );

    const onActivePageChange = (newPage: number) => {
      setLoading(true);
      store.setActivePage(newPage);
      navigate(`/search/${store.query}/${store.activePage}`);
      setLoading(false);
    };

    useEffect(() => {
      (async () => {
        setLoading(true);
        const imageResponse = await api.getNasaImages(query, parseInt(page));
        store.setNasaImages(imageResponse);
        setLoading(false);
      })();
    }, [query, page]);

    if (loading) {
      return <Loader />;
    }

    return (
      <SearchResultsContainer as="main">
        <Pager
          activePage={store.activePage}
          onChange={(newPage) => onActivePageChange(newPage)}
        />
        <NasaImageGrid>{images}</NasaImageGrid>
      </SearchResultsContainer>
    );
  }
);

const SearchResultsContainer = styled(MaxWidthContainer)``;

const NasaImageGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

export default SearchResults;
