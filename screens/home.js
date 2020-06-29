import React, { useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { ingredientCapitaliser, replaceSpace } from "../utils/utils";

export default function Home({ navigation }) {
  const [cocktail, setCocktail] = useState([]);
  const [count, setCount] = useState(0);

  const AboutNavigate = () => {
    navigation.navigate("About");
  };
  const CocktailNavigate = () => {
    navigation.navigate("Cocktail");
  };

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mai_tai")
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
        setCount(count + 1);
        console.log(count);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cocktail", cocktail)}
      >
        <Text style={globalStyles.test}>{cocktail.strDrink}</Text>
      </TouchableOpacity>
      <Text>{ingredientCapitaliser(cocktail.strIngredient1)}</Text>
      {/* <Button title='about' onPress={AboutNavigate} />*/}
      {/* <Button title='cocktail' onPress={CocktailNavigate} /> */}
    </View>
  );
}
