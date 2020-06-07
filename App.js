import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
  Picker,
} from "react-native";

export default function App() {
  const [cocktail, setCocktail] = useState([]);
  const [count, setCount] = useState(0);
  const [newCocktail, changeCocktail] = useState("");
  const [cocktailsByLetter, setCocktailsByLetter] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mai_tai")
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
        setCount(count + 1);
        // console.log(count);
      })
      .catch((error) => console.log(error));
  }, []);

  const randCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
      })
      .catch((error) => {});
  };

  const aCocktails = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        setCocktailsByLetter(data.drinks);
      });
  };

  const onSubmitEdit = (val) => {
    // console.log(val, 'onsubmiteditfunction');
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`)
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
      })
      .then(() => {
        changeCocktail("");
      })
      .catch((error) => console.log(error));
  };

  const updateCocktail = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newCocktail}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "updateCocktailFunction");
        setCocktail(data.drinks[0]);
      })
      .catch((error) =>
        Alert.alert(
          "Cocktail not found",
          "Please check your spelling and try again",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            { text: "OK", onPress: () => {} },
          ],
          { cancelable: false }
        )
      );
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />
      <Text style={styles.text}>{cocktail.strDrink}</Text>
      {/* <Text style={styles.text}>Change cocktail to:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. Margarita'
        onChangeText={(text) => changeCocktail(text)}
        onSubmitEditing={(event) => {
          onSubmitEdit(event.nativeEvent.text);
        }}
      />
      <TouchableHighlight style={styles.submit} onPress={updateCocktail}>
        <Text>Press this button to submit editing</Text>
      </TouchableHighlight>
      <View style={styles.button}>
        <Button title='pick random' onPress={randCocktail} />
      </View>
      */}
      <Button title='get a cocktails' onPress={aCocktails} />
      <ScrollView>
        {cocktailsByLetter.map((cocktail) => {
          return (
            <View key={cocktail.idDrink} style={styles.list}>
              <Text style={styles.title}>{cocktail.strDrink}</Text>
              <Text>{cocktail.strIngredient1}</Text>
              <Text>{cocktail.strIngredient2}</Text>
              <Text>{cocktail.strIngredient3}</Text>
              <Text>...</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
  submit: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
  },
  button: {
    padding: 10,
  },
  list: {
    width: 200,
  },
  title: {
    fontWeight: "bold",
  },
});
