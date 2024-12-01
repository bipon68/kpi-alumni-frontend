import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import URLParse from "url-parse";
import { getApiUrl } from "./env";

export interface CurrentUser {
  currentUser?: {
    userUid?: string;
    refreshToken?: string;
  };
}

interface QueryParams {
  [key: string]: string | number | boolean;
}

class AxiosAuth {
  url: string = "";

  setHeaders = (): this => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Init-Id"] = localStorage.getItem("init-id") || "";
    axios.defaults.headers.common["Client-Time"] = new Date().toISOString();
    axios.defaults.headers.common["Authorization"] = localStorage.getItem("token") || "";
    return this;
  };

  currentUserAuth = ({ currentUser }: CurrentUser): this => {
    axios.defaults.headers.common["user-uid"] = currentUser?.userUid || "";
    axios.defaults.headers.common["refresh-token"] = currentUser?.refreshToken || "";
    return this;
  };

  setUrl = (url: string): this => {
    this.url = url;
    return this;
  };

  setPath = (path: string, query: QueryParams = {}): this => {
    const rUrl = path
      .split("/")
      .filter((p) => !!p)
      .join("/");

    const url = new URLParse(`${getApiUrl()}/${rUrl}`, true);

    //Create a new query object
    const newQuery = { ...url.query, ...query };

    //Set the new query object
    url.set("query", newQuery);

    this.url = url.toString();

    return this;
  };

  getUrl = (): string => {
    return this.url;
  };

  get = async (options?: AxiosRequestConfig): Promise<AxiosResponse> => {
    this.setHeaders();

    const response = await axios.get(this.url, options);
    return response;
  };

  post = async (params: object, options?: AxiosRequestConfig): Promise<AxiosResponse> => {
    this.setHeaders();

    const response = await axios.post(this.url, params, options);
    return response;
  };

  put = async (params: object, options?: AxiosRequestConfig): Promise<AxiosResponse> => {
    this.setHeaders();

    const response = await axios.put(this.url, params, options);
    return response;
  };

  patch = async (params: object, options?: AxiosRequestConfig): Promise<AxiosResponse> => {
    this.setHeaders();

    const response = await axios.patch(this.url, params, options);
    return response;
  };

  delete = async (params: Record<string, unknown>, options?: AxiosRequestConfig): Promise<AxiosResponse> => {
    this.setHeaders();

    const response = await axios.delete(this.url, { ...options, data: params });
    return response;
  };
}

const AxiosApi = new AxiosAuth();

export default AxiosApi;
