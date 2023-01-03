import useFetchBackend from '~/composables/useFetch';

export default function useUser() {
  const fetchUser = async () => {
    const token = useCookie('token');

    if (token) {
      const user = useState('user');

      if (!user.value) {
        const { data, error } = await useFetchBackend('api/user');

        if (error.value) {
          return;
        }

        user.value = data.value;

        return user.value;
      }
    }
  };

  return {
    fetchUser,
  };
}