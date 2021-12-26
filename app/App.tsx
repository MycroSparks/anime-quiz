import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Main } from "./src/common/main/main";
import { AppContextProvider } from "./src/core/app-context/app-context.provider";

export default function App() {
  return (
    <AppContextProvider>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
