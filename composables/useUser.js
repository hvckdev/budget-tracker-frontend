export default function useUser() {
  const fetchUser = async () => {
    const token = useCookie('token');
    const { $api } = useNuxtApp();

    if (token.value) {
      const user = useState('user');

      if (!user.value) {
        try {
          user.value = await $api('api/user');

          return user.value;
        } catch (e) {
          delete token.value;
        }
      }
    }
  };

  return {
    fetchUser,
  };
}