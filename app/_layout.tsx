import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}  />
    </Stack>
  );
}
