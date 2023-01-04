export default function usePurchases() {
  const { $api } = useNuxtApp();

  const getPurchases = async () => {
    const { data } = await $api('purchase');

    return data;
  };

  const storePurchase = async (data) => {
    await $api('purchase', {
      method: 'post',
      body: data,
    });
  };

  return {
    getPurchases,
    storePurchase,
  };
}