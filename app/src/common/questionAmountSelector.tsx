import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";

interface Props {
  onSelect: (amount: number) => void;
  options: number[];
}

export const QuestionAmountSelector: React.FC<Props> = ({
  onSelect,
  options,
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", display: "flex" }}>
      <View style={{ flex: 2, marginHorizontal: 20 }}>
        <Headline style={{ textAlign: "center", fontWeight: "bold" }}>
          Number of questions
        </Headline>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {options.map((option) => (
          <Button
            key={option}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
            }}
            mode="contained"
            onPress={() => onSelect(option)}
          >
            {option}
          </Button>
        ))}
      </View>
    </View>
  );
};
