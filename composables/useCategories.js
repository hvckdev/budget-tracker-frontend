import { useToast } from 'vue-toastification';

export default function useCategories() {
  const { $api } = useNuxtApp();
  const router = useRouter();

  const toast = useToast();

  const getCategories = async () => {
    const { categories } = await $api('/api/category');

    return categories;
  };

  const storeCategory = async (values) => {
    try {
      await $api('/api/category', {
        method: 'post',
        body: values,
      });

      toast.success('Successfully created a category 😍');

      router.push('/categories');
    } catch (e) {
      toast.error(e.data.message);
    }
  };

  const editCategory = async (category, values) => {
    try {
      await $api(`/api/category/${category}`, {
        method: 'put',
        body: values,
      });

      toast.success('Successfully edited a category 😍');

      router.push('/categories');
    } catch (e) {
      toast.error(e);
    }
  };

  const getCategory = async (category) => {
    try {
      return await $api(`/api/category/${category}`);
    } catch (e) {
      toast.error(e.data.detail);
    }
  };

  const destroyCategory = async (category) => {
    try {
      await $api(`/api/category/${category}`, {
        method: 'delete',
      });
    } catch (e) {
      toast.error(e.data.detail);
    }
  };

  return {
    getCategories,
    storeCategory,
    editCategory,
    getCategory,
    destroyCategory,
  };
}