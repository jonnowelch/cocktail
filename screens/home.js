import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const AboutNavigate = () => {
    navigation.navigate("About");
  };
  const CocktailNavigate = () => {
    navigation.navigate("Cocktail");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Text style={globalStyles.test}>Tester</Text>
      <Button title='about' onPress={AboutNavigate} />
      <Button title='cocktail' onPress={CocktailNavigate} />
    </View>
  );
}
