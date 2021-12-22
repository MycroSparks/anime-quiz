import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Main: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
