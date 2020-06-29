import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
  const cocktailNav = () => {
    navigation.navigate("Cocktail");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Thanks for visiting</Text>
      <Button title='cocktail' onPress={cocktailNav} />
    </View>
  );
}
