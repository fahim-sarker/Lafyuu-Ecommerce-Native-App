import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

import { StoreProvider } from "../context/StoreContext";
import Toast from "react-native-toast-message";

cssInterop(MaterialIcons, {
  className: {
    target: "style",
  },
});
cssInterop(FontAwesome, {
  className: {
    target: "style",
  },
});
cssInterop(AntDesign, {
  className: {
    target: "style",
  },
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <StoreProvider>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Stack screenOptions={{ headerShown: false }} />
          <Toast />
        </SafeAreaView>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
