import Drawer from "@/src/components/Drawer";
import useDarkMode from "@/src/hooks/useDarkMode";
import usePersistLogin from "@/src/hooks/usePersistLogin";
import useRequireAuth from "@/src/hooks/useRequireAuth";
import { AllowedRoles, UserRoles } from "@/src/types/roles.types";
import { FontAwesome } from "@expo/vector-icons";
import { Slot, useRouter, usePathname, Router } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native";

// Optionally define role restrictions per path
const protectedRoutes: { [key: string]: AllowedRoles[] } = {
  "/admin": [UserRoles.ROLE_ADMIN],
  "/dashboard": [UserRoles.ROLE_USER, UserRoles.ROLE_ADMIN],
};

export default function ProtectedLayout() {
  const { auth, persist, isLoading } = usePersistLogin();
  const { roles } = useRequireAuth();
  const router: Router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const allowedRoles = Object.entries(protectedRoutes).find(([route]) =>
      pathname.startsWith(route)
    )?.[1];

    if (!isLoading) {
      if (!auth?.accessToken) {
        router.replace("/login");
      } else if (
        allowedRoles &&
        !roles.some((role) => allowedRoles.includes(role))
      ) {
        router.replace("/unauthorized");
      }
    }
  }, [auth, isLoading, pathname]);

  if (persist && isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <View
      className={`flex-1 relative ${isDarkMode ? "bg-[#111827]" : "bg-white"}`}
    >
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <View className="p-4 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => setIsDrawerOpen(true)}>
          <FontAwesome
            name="bars"
            size={24}
            color={isDarkMode ? "white" : "#1e293b"}
          />
        </TouchableOpacity>
        {/* <Text
          className={`text-xl font-semibold ${isDarkMode ? "text-white" : ""}`}
        >
          App
        </Text> */}
        <View className="w-6" />
      </View>

      <View className="flex-1">
        <Slot />
      </View>
    </View>
  );
}
