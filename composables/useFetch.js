import { useCookie, useFetch } from '#app';

export default function useFetchBackend(url, options) {
  const runtimeConfig = useRuntimeConfig();
  const token = useCookie('token');

  const customOptions = {
    baseURL: runtimeConfig.public.apiBase,
    ...options,
  };

  if (token.value) {
    customOptions.headers = {
      Authorization: `Bearer ${token.value}`,
    };
  }

  return useFetch(url, customOptions);
}