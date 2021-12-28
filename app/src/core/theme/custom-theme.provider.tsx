import { Provider as PaperProvider } from "react-native-paper";
import { useAppContext } from "../app-context/app-context.hook";

export const CustomThemeProvider: React.FC = ({ children }) => {
  const { customTheme } = useAppContext();

  return <PaperProvider theme={customTheme}>{children}</PaperProvider>;
};
