import { useToast } from 'vue-toastification';
import { navigateTo } from '#app';

export default function useCategories() {
  const { $api } = useNuxtApp();

  const toast = useToast();

  const getCategories = async () => {

    const { data } = await $api('category');

    return data;
  };

  const storeCategory = async (values) => {
    await $api('category', {
      method: 'post',
      body: values,
    });

    toast.success('Successfully created a category 😍');

    navigateTo('/categories');
  };

  const editCategory = async (category, values) => {
    await $api(`category/${category}`, {
      method: 'put',
      body: values,
    });

    toast.success('Successfully edited a category 😍');

    navigateTo('/categories');
  };

  const getCategory = async (category) => {
    const { data } = await $api(`category/${category}`);

    return data;
  };

  const destroyCategory = async (category) => {
    await $api(`category/${category}`, {
      method: 'delete',
    });

    toast.success('Successfully deleted category! 🔥');
  };

  return {
    getCategories,
    storeCategory,
    editCategory,
    getCategory,
    destroyCategory,
  };
}