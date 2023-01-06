import { useToast } from 'vue-toastification';
import { navigateTo } from '#app';

export default function usePurchases() {
  const { $api } = useNuxtApp();
  const toast = useToast();

  const getPurchases = async () => {
    const { data } = await $api('purchase');

    return data;
  };

  const storePurchase = async (data) => {
    try {
      await $api('purchase', {
        method: 'post',
        body: data,
      });

      toast.success('Successfully created purchase! 👜');

      navigateTo('/purchases');
    } catch (e) {
      toast.error(e.data.detail);
    }
  };

  const destroyPurchase = async (purchase) => {
    await $api(`purchase/${purchase}`, {
      method: 'delete',
    });

    toast.success('Successfully deleted purchase! 👜');
  };

  const getPurchase = async (purchase) => {
    const { data } = await $api(`purchase/${purchase}`);

    return data;
  };

  const updatePurchase = async (purchase, data) => {
    $api(`purchase/${purchase}`, {
      method: 'put',
      body: data,
    });

    toast.success('Successfully updated purchase! 👜');

    navigateTo('/purchases');
  };

  return {
    getPurchases,
    storePurchase,
    destroyPurchase,
    getPurchase,
    updatePurchase,
  };
}