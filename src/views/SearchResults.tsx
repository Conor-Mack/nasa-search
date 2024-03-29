import React, { useEffect, useState, useContext, useMemo } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { Pager, Image, Loader } from "../components";
import { ImageStoreContext } from "../store";
import api from "../api";
import { observer } from "mobx-react-lite";
import { MaxWidthContainer } from "../utils/styles";
import styled from "styled-components";
import { toJS } from "mobx";
//@ts-ignore
import OnImagesLoaded from "react-on-images-loaded";
import withErrorHandling, { useAsyncError } from "../views/ErrorBoundary";

interface SearchResultsProps extends RouteComponentProps {
  query?: string;
  page?: string;
}

const SearchResults: React.FC<SearchResultsProps> = observer(
  ({ query = "", page = "1" }) => {
    const [loading, setLoading] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const store = useContext(ImageStoreContext);
    const hasImagesToDisplay = store.nasaImages.length > 0;

    //Expensive computation - best not to repeat this unnecessarily
    const images = useMemo(
      () =>
        toJS(store.nasaImages).map(({ title, href }) => (
          <Image key={href} src={href} alt={title} height="100%" width="100%" />
        )),
      [store.nasaImages]
    );

    //Re-navigate each time a new page is selected by the user
    const onActivePageChange = (newPage: number) => {
      store.setActivePage(newPage);
      navigate(`/search/${store.query}/${store.activePage}`);
    };

    //Triggers error boundary HOC wrapping the component route
    const setError = useAsyncError();

    //Fetching images is driven off navigation to this route component
    useEffect(() => {
      (async () => {
        try {
          setLoading(true);
          setImagesLoaded(false);
          const parsedPaged = parseInt(page);

          //Sync store with route params - incase url changed directly
          if (store.query !== query) {
            store.setSearchQuery(query);
          }
          if (store.activePage !== parsedPaged) {
            store.setActivePage(parsedPaged);
          }

          const imageResponse = await api.getNasaImages(query, parsedPaged);
          store.setNasaImages(imageResponse);
          setLoading(false);
        } catch (error) {
          setError(new Error("Search Results - fetch images has failed"));
        }
      })();
    }, [query, page]);

    //Display loading spinner when api is fetching and images haven't yet loaded
    if (loading && !imagesLoaded) {
      return <Loader />;
    }

    if (!hasImagesToDisplay) {
      return <NoImagesMessage>No images to display</NoImagesMessage>;
    }

    return (
      <SearchResultsContainer as="main">
        <Fade show={imagesLoaded}>
          <Pager
            activePage={store.activePage}
            onChange={(newPage) => onActivePageChange(newPage)}
          />
        </Fade>

        <OnImagesLoaded onLoaded={() => setImagesLoaded(true)}>
          <Fade show={imagesLoaded}>
            <NasaImageGrid data-testid="image-grid">{images}</NasaImageGrid>
          </Fade>
        </OnImagesLoaded>

        <Fade show={imagesLoaded}>
          <Pager
            activePage={store.activePage}
            onChange={(newPage) => onActivePageChange(newPage)}
          />
        </Fade>
      </SearchResultsContainer>
    );
  }
);

const SearchResultsContainer = styled(MaxWidthContainer)`
  padding: 8px;
`;

const NoImagesMessage = styled.h2`
  text-align: center;
`;

const NasaImageGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 8px;
`;

const Fade = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s;
`;

export default withErrorHandling(SearchResults);
