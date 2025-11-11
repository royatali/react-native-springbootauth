import { Router, useRouter } from "expo-router";
import { logout } from "../api/serverApi";
import { useAuth } from "../context/authContext";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-toast-message";
import { ErrorEnum } from "../constants/errorConstants";

const useLogout = () => {
  const { setAuth, setPersist, auth } = useAuth();

  const router: Router = useRouter();

  const REFRESH_TOKEN_KEY = "refreshToken";

  const handleLogout = () => {
    router.replace("/login");
    setAuth(null);
    setPersist(false);
  };

  const logoutHandler = async (): Promise<void> => {
    try {
      const storedRefreshToken = await SecureStore.getItemAsync(
        REFRESH_TOKEN_KEY
      );

      const { data } = await logout(auth?.accessToken as string, {
        refreshToken: storedRefreshToken as string,
      });

      await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: data.message,
        visibilityTime: 3000,
      });
      handleLogout();
    } catch (error: any) {
      if (error?.message === ErrorEnum.NETWORK_ERROR) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error?.message,
          visibilityTime: 5000,
        });
      }

      handleLogout();
    }
  };
  return logoutHandler;
};

export default useLogout;
