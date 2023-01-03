import useUser from "~/composables/useUser";

export default defineNuxtPlugin((nuxtApp) => {
    const { fetchUser } = useUser();

    nuxtApp.hook('app:mounted', () => {
        fetchUser().then();
    })
})