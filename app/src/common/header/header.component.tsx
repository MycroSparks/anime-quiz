import { View } from "react-native";
import { Headline } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAppContext } from "../../core/app-context/app-context.hook";

export const Header: React.FC = () => {
  const { points } = useAppContext();

  return (
    <View
      style={{
        right: 8,
        top: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Headline style={{ color: "white", marginRight: 2, fontWeight: "bold" }}>
        {points}
      </Headline>
      <MaterialIcons size={32} color={"orange"} name="star"></MaterialIcons>
    </View>
  );
};
