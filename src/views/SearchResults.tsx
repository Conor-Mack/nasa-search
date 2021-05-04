import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import useNasaImages from "../hooks/useNasaImages";

interface ISearchResults extends RouteComponentProps {
  query?: string;
  page?: number;
}

const SearchResults: React.FC<ISearchResults> = ({ query, page }) => {
  const { nasaImages, loading } = useNasaImages(query!, page!);

  return (
    <div>
      <h2>This will contain search results</h2>
    </div>
  );
};

export default SearchResults;
