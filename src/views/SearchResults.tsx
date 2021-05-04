import React, { useEffect, useState, useContext } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { Pager } from "../components";
import { ImageStoreContext } from "../store";
import api from "../api";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface SearchResultsProps extends RouteComponentProps {
  query?: string;
  page?: string;
}

const SearchResults: React.FC<SearchResultsProps> = observer(
  ({ query = "", page = "1" }) => {
    const [loading, setLoading] = useState(false);

    const store = useContext(ImageStoreContext);

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

    return (
      <div>
        <Pager
          activePage={store.activePage}
          onChange={(newPage) => onActivePageChange(newPage)}
        />
        <h2>This will contain search results</h2>
      </div>
    );
  }
);

export default SearchResults;
