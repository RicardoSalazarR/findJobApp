import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DMBoldFont from "../assets/fonts/DMSans-Bold.ttf";
import DMMediumFont from "../assets/fonts/DMSans-Medium.ttf";
import DMRegularFont from "../assets/fonts/DMSans-Regular.ttf";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: DMBoldFont,
    DMMedium: DMMediumFont,
    DMRegular: DMRegularFont,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
