import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Header() {
  return (
    <View>
      <Image source={require("../assets/logo.png")} />
    </View>
  );
}
