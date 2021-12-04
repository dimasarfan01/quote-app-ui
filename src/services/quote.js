import callAPI from '../config/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ROOT_API = import.meta.env.VITE_PUBLIC_API;
const API_VERSION = 'api/v1';

export const postQuoteData = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/quote/post`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
};

export const postLikeQuoteData = async (id) => {
  const url = `${ROOT_API}/${API_VERSION}/quote/like/${id}`;
  return callAPI({
    url,
    method: 'POST',
    token: true,
  });
};

export const deleteQuoteData = async (id) => {
  const url = `${ROOT_API}/${API_VERSION}/quote/delete/${id}`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
};

export const editQuoteData = async (id, data) => {
  const url = `${ROOT_API}/${API_VERSION}/quote/update/${id}`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
};

export const getQuoteDataApi = createApi({
  reducerPath: 'getQuoteDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ROOT_API}/${API_VERSION}`,
  }),
  endpoints: (builder) => ({
    getQuoteDataByQuery: builder.query({
      query: ({ page = 1, limit = 8, tag = '' }) =>
        `/quote/get?page=${page}&limit=${limit}&tag=${tag}`,
    }),
  }),
});

export const { useGetQuoteDataByQueryQuery } = getQuoteDataApi;
