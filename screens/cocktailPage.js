import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
      <Text style={globalStyles.titleText}>HC</Text>
      <Button title='yam' onPress={pressHandler} />
      <Button title='home' onPress={homeButton} />
    </View>
  );
}
