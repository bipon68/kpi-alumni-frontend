export type TApiResponse<T> = {
  error: number;
  message?: string;
  data?: T;
  referenceName?: string;
};

export type TPagination = {
  cpp: number;
  offset: number;
  page: number;
};
