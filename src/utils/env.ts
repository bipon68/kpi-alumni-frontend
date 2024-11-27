export const isDev = import.meta.env.MODE === "development";

export const isProd = import.meta.env.MODE === "production";

//--Check if the current environment to set database url
export const getApiUrl = () => {
  if (isDev && !isProd) {
    return import.meta.env.VITE_DEV_API_URL;
  }

  return import.meta.env.VITE_PROD_API_URL;
};
