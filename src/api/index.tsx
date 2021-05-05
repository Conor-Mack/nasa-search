import axios, { AxiosResponse } from "axios";
import { NasaImagesResponse } from "../utils/types";

const baseURL = "https://images-api.nasa.gov/";

const axiosInstance = axios.create({
  baseURL,
});

type RequestParams = {
  params: { [index: string]: string | number; ["media_type"]: string };
};

const getParams = (params: { q: string; page: number }): RequestParams => ({
  params: { media_type: "image", ...params },
});

const getNasaImages = async (
  q: string,
  page: number
): Promise<AxiosResponse<NasaImagesResponse>> => {
  const params = getParams({ q, page });
  const test = await axiosInstance.get(`/search`, params);
  return test;
};

const api = { getNasaImages };

export default api;
