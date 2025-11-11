import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import useDarkMode from "@/src/hooks/useDarkMode";

const UnauthorizedScreen = (): React.JSX.Element => {
  const router: Router = useRouter();
  const { isDarkMode } = useDarkMode();

  const goBack = (): void => {
    router.push("/dashboard");
  };

  return (
    <View
      className={`flex-1 items-center justify-center px-6 ${
        isDarkMode ? "bg-[#0f172a]" : "bg-gray-100"
      }`}
    >
      <FontAwesome
        name="lock"
        size={64}
        color={isDarkMode ? "#ef4444" : "#dc2626"} // brighter red in dark mode
        style={{ marginBottom: 16 }}
      />

      <Text
        className={`text-3xl font-bold mb-2 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Unauthorized
      </Text>

      <Text
        className={`text-lg text-center mb-6 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        You do not have the necessary permissions to access this page.
      </Text>

      <TouchableOpacity
        onPress={goBack}
        className={`rounded-lg px-6 py-3 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-600"
        }`}
      >
        <Text
          className={`font-semibold text-lg ${
            isDarkMode ? "text-white" : "text-white"
          }`}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnauthorizedScreen;
