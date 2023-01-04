import { navigateTo, useCookie } from '#app';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

export default function useAuth() {
  const error = ref(null);
  const { $api } = useNuxtApp();
  const toast = useToast();

  const login = async (data) => {
    const token = useCookie('token');

    try {
      const response = await $api('login_check', {
        method: 'post',
        body: data,
      });

      token.value = response.token;

      toast.success('Successfully logged in.');

      // window location cuz of reload nuxt
      // todo: find a better way to reload cookie
      window.location = '/';
    } catch (e) {
      toast.error(e.data.message);
    }
  };

  const register = async (data) => {
    try {
      await $api('registration', {
        method: 'POST',
        body: data,
      });

      toast.success('Successfully registered! ✨');

      navigateTo('/login');
    } catch (e) {
      toast.error(e.data.detail);
    }
  };

  return {
    login,
    register,
    error,
  };
}