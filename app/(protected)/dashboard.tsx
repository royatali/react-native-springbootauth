import useDarkMode from "@/src/hooks/useDarkMode";
import { LogBox, Text, View } from "react-native";
import "../globals.css";

LogBox.ignoreAllLogs();

export default function DashboardScreen() {
  const { isDarkMode } = useDarkMode();

  return (
    <View
      className={`flex-1 items-center justify-center ${
        isDarkMode ? "bg-[#111827]" : "bg-white"
      }`}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: isDarkMode ? "#fff" : "#000",
          marginBottom: 24,
        }}
      >
        Dashboard
      </Text>
    </View>
  );
}
