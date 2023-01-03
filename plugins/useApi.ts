import { ofetch } from "ofetch";
import { useCookie } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();
    const token = useCookie('token');

    const config = {
        baseURL: runtimeConfig.public.apiBase,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: '',
        }
    };

    if (token.value) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token.value}`,
        }
    }

    const apiFetch = ofetch.create(config)

    nuxtApp.provide('api', apiFetch);
})