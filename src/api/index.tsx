import axios, { AxiosResponse } from "axios";
import { NasaImagesResponse } from "../utils/types";

const baseURL = "https://images-api.nasa.gov/";

const axiosInstance = axios.create({
  baseURL,
});

type RequestParams = {
  params: { [index: string]: string | number; ["media_type"]: string };
};

//make media type: image mandatory
const getParams = (params: { q: string; page: number }): RequestParams => ({
  params: { media_type: "image", ...params },
});

const getNasaImages = async (
  q: string,
  page: number
): Promise<AxiosResponse<NasaImagesResponse>> => {
  const params = getParams({ q, page });
  return await axiosInstance.get(`/search`, params);
};

const api = { getNasaImages };

export default api;
