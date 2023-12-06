import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { AppContextProvider } from "./src/core/app-context/app-context.provider";
import { CustomThemeProvider } from "./src/core/theme/custom-theme.provider";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/common/navigation/navigator.component";

export default function App() {
  return (
    <AppContextProvider>
      <CustomThemeProvider>
        <NavigationContainer
          theme={{
            dark: false,
            colors: {
              primary: "rgba(0,0,0,0)",
              background: "rgba(242, 242, 242)",
              card: "rgba(255, 255, 255)",
              text: "rgba(28, 28, 30)",
              border: "rgba(199, 199, 204)",
              notification: "rgba(255, 69, 58)",
            },
          }}
        >
          <StatusBar style="auto" />
          <Navigator />
        </NavigationContainer>
      </CustomThemeProvider>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
