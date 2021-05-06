import { AxiosResponse } from "axios";
import { NasaImagesResponse, ImagesWithTitle } from "./types";

export const parseResponse = (response: AxiosResponse<NasaImagesResponse>) => {
  const data = response.data.collection.items.reduce<ImagesWithTitle>(
    (acc, { data, links }) => {
      const title = data[0].description;
      const href = links[0].href;
      acc.push({ title, href });
      return acc;
    },
    []
  );
  return data;
};
