import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { useAppContext } from "../../core/app-context/app-context.hook";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigator.component";

export const EndScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, "EndScreen">
> = ({ navigation, route }) => {
  const { setCorrectGuesses, correctGuesses } = useAppContext();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          You got {correctGuesses} out of {route.params.totalQuestions}{" "}
          questions right!
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button
          style={{ marginHorizontal: 20 }}
          onPress={() => {
            setCorrectGuesses(0);
            navigation.popToTop();
          }}
          mode="contained"
        >
          Ok
        </Button>
      </View>
    </View>
  );
};
