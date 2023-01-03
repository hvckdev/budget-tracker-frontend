import useFetchBackend from '~/composables/useFetch';

export default function useCategories() {
  const { $api } = useNuxtApp();

  const getCategories = async () => {
    const { categories } = await $api('/api/category');

    return categories;
  };

  return {
    getCategories,
  };
}