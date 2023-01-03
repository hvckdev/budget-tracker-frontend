import { useCookie } from '#app';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import useUser from '~/composables/useUser';

export default function useAuth() {
  const error = ref(null);
  const { $api } = useNuxtApp();

  const login = async (data) => {
    const token = useCookie('token');
    const toast = useToast();
    const router = useRouter();

    const { fetchUser } = useUser();

    try {
      const response = await $api('api/login_check', {
        method: 'post',
        body: data,
      });

      token.value = response.token;

      await fetchUser();

      toast.success('Successfully logged in.');

      router.push('/');
    } catch (e) {
      toast.success(e.data.message);
    }
  };

  const register = (data) => {
    $api('api/registration', {
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