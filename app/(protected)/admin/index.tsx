import useDarkMode from "@/src/hooks/useDarkMode";
import { SafeAreaView, Text } from "react-native";

const AdminScreen = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#111827" : "#fff",
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: isDarkMode ? "#fff" : "#000",
          marginBottom: 24,
        }}
      >
        Admin
      </Text>
    </SafeAreaView>
  );
};

export default AdminScreen;
