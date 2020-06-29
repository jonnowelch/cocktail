import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Cocktail({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("About");
  };

  const homeButton = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("strIngredient1")}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "IngredientInfo",
            navigation.getParam("strIngredient1")
          )
        }
      >
        <Text style={globalStyles.test}>
          {navigation.getParam("strIngredient1")}
        </Text>
      </TouchableOpacity>
      {/* <Text style={globalStyles.titleText}>HC</Text>
      <Button title='yam' onPress={pressHandler} />
      <Button title='home' onPress={homeButton} /> */}
    </View>
  );
}
