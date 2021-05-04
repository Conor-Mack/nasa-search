import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import useNasaImages from "../hooks/useNasaImages";
import { Pager } from "../components";

interface SearchResultsProps extends RouteComponentProps {
  query?: string;
  page?: number;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, page }) => {
  const { nasaImages, loading } = useNasaImages(query!, page!);

  return (
    <div>
      <Pager activePage={page!} onChange={(newPage) => console.log(newPage)} />
      <h2>This will contain search results</h2>
    </div>
  );
};

export default SearchResults;
