import { makeAutoObservable } from "mobx";
import { ImagesWithTitle, NasaImagesResponse } from "../types";
import { createContext, useContext } from "react";
import { parseResponse } from "../utils/functions";
import { AxiosResponse } from "axios";

export class ImageSearchStore {
  nasaImages: ImagesWithTitle = [];
  activePage = 1;
  query = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNasaImages(images: AxiosResponse<NasaImagesResponse>) {
    this.nasaImages = parseResponse(images);
  }

  setSearchQuery(query: string) {
    this.query = query;
  }

  setActivePage(page: number) {
    this.activePage = page;
  }
}

export const ImageStoreContext = createContext<ImageSearchStore>(
  {} as ImageSearchStore
);
