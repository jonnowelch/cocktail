import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [cocktail, SetCocktail] = useState([]);
  return (
    <View style={styles.container}>
      {/* <Image source={require("./assets/logo.png")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
