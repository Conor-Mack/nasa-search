import { useEffect, useState } from "react";
import api from "../api";
import { ImagesWithTitle } from "../types";
import { parseResponse } from "../utils/functions";

const useNasaImages = (query: string, page: number) => {
  const [nasaImages, setNasaImages] = useState<ImagesWithTitle>([]);
  const [loading, setLoading] = useState(false);

  //useEffect call - dependent on query and page makes call to api
  useEffect(() => {
    (async () => {
      setLoading(true);
      const imageResponse = await api.getNasaImages(query, page);
      const imagesWithTitle = parseResponse(imageResponse);
      setNasaImages(imagesWithTitle);
      setLoading(false);
    })();
  }, [query, page]);

  return {
    nasaImages,
    loading,
  };
};

export default useNasaImages;
