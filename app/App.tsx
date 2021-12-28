import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Main } from "./src/common/main/main";
import { AppContextProvider } from "./src/core/app-context/app-context.provider";
import { CustomThemeProvider } from "./src/core/theme/custom-theme.provider";

export default function App() {
  return (
    <AppContextProvider>
      <CustomThemeProvider>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Main />
        </View>
      </CustomThemeProvider>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
