import { ofetch } from 'ofetch';
import { navigateTo, useCookie } from '#app';
import { useToast } from 'vue-toastification';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const token = useCookie('token');

  const config = {
    baseURL: `${runtimeConfig.public.apiBase}/api/v1/`,
    headers: {}, // breaks
    onRequest({ options }) {
      options.headers.Accept = 'application/json';
      options.headers['Content-Type'] = 'application/json';

      if (token.value) {
        options.headers.Authorization = `Bearer ${token.value}`;
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo('/login');
      }
      if (response.status === 404) {
        throw createError(
            { statusCode: 404, statusMessage: 'Page not found.' });
      }
    },
  };

  const apiFetch = ofetch.create(config);

  nuxtApp.provide('api', apiFetch);
});