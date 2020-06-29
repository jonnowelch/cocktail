import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function IngredientInfo({ navigation }) {
  const [ingredientInfo, setIngredientInfo] = useState([]);
  const cocktailNav = () => {
    navigation.navigate("Cocktail");
  };

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${navigation.state.params}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIngredientInfo(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        {console.log("***", ingredientInfo.ingredients.strAlcohol, "***")}
      </Text>
      <Button title='cocktail' onPress={cocktailNav} />
    </View>
  );
}
