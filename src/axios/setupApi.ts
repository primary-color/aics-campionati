import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { useStore } from "@/store/main";
import axios from "axios";
import { checkLastRequestDate } from "@/utils/date";
import { REQUEST_DATE_MINUTES } from "@/constants";

const onRequest = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
  console.log(`[Intercept API request > ${config.method?.toUpperCase()}: /${config.url}]`);
  const store = useStore();
  if (checkLastRequestDate(store.requestDate, REQUEST_DATE_MINUTES)) {
    console.log(`[Enable long loading]`);
    store.longLoading = true;
  }
  return config;
};

const onResponse = async (response: AxiosResponse) => {
  console.log(`[Intercept API response > ${response.config.method?.toUpperCase()}: /${response.config.url}]`);
  const store = useStore();
  setTimeout(() => (store.longLoading = false), 1000);
  store.requestDate = new Date();
  return response;
};

export default function setup(): AxiosInstance {
  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse);
  return axiosInstance;
}
