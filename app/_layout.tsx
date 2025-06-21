import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/cache";

export default function RootLayout() {
  const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishKey}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={style.body}>
            <StatusBar />
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
