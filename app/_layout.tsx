import { COLORS } from "@/constants/theme";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitalLayout from "@/components/InitalLayout";
import AllProviders from "@/providers/AllProviders";

export default function RootLayout() {

  return (
    <AllProviders>
      <SafeAreaProvider>
        <SafeAreaView style={style.body}>
          <StatusBar />
          <InitalLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </AllProviders>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
