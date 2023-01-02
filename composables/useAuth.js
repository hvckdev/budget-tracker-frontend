import useFetchBackend from '~/composables/useFetch';
import { useCookie } from '#app';
import { ref } from 'vue';

export default function useAuth() {
  const error = ref(null);

  const login = async (data) => {
    const response = await useFetchBackend('api/login_check', {
      method: 'post',
      body: data,
    });

    if (response.error.value) {
      error.value = response.error.value.response._data.message;

      return;
    }

    const token = useCookie('token');

    token.value = response.data.value.token;
  };

  const register = (data) => {
    useFetchBackend('api/registration', {
      method: 'POST',
      body: data,
    }).then(() => {
      window.location = '/login';
    });
  };

  return {
    login,
    register,
    error,
  };
}