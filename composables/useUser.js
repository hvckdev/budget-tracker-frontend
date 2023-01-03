export default function useUser() {
  const fetchUser = async () => {
    const token = useCookie('token');
    const { $api } = useNuxtApp();

    if (token) {
      const user = useState('user');

      if (!user.value) {
        try {
          const response = await $api('api/user');

          user.value = response;

          return user.value;
        } catch (e) {
          // todo: handle
        }
      }
    }
  };

  return {
    fetchUser,
  };
}