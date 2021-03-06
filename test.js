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
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import Header from "./components/header";
// import Sandbox from "./components/Sandbox";
import { ingredientCapitaliser } from "./utils/utils";
import Home from "./screens/home";

export default function App() {
  const [cocktail, setCocktail] = useState([]);
  const [count, setCount] = useState(0);
  const [newCocktail, changeCocktail] = useState("");
  const [cocktailsByLetter, setCocktailsByLetter] = useState([]);
  const [alphabetLetter, setLetter] = useState("A");

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

  const cocktailByLetter = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${alphabetLetter}`
    )
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

  const pressHandler = (idDrink) => {
    console.log(idDrink);
  };

  return (
    <Home />
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    //   {/* <ScrollView> */}
    //   <View style={styles.container}>
    //     <Header />
    //     <Text style={styles.text}>{cocktail.strDrink}</Text>
    //     <Text style={styles.text}>Change cocktail to:</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder='e.g. Margarita'
    //       onChangeText={(text) => changeCocktail(text)}
    //       onSubmitEditing={(event) => {
    //         onSubmitEdit(event.nativeEvent.text);
    //       }}
    //     />
    //     <TouchableHighlight style={styles.submit} onPress={updateCocktail}>
    //       <Text>Press this button to submit editing</Text>
    //     </TouchableHighlight>
    //     <View style={styles.button}>
    //       <Button title='pick random' onPress={randCocktail} />
    //     </View>
    //     <Picker
    //       selectedValue={alphabetLetter}
    //       style={{ height: 50, width: 100 }}
    //       onValueChange={(itemValue, itemIndex) => setLetter(itemValue)}
    //     >
    //       <Picker.Item label='A' value='a' />
    //       <Picker.Item label='B' value='b' />
    //       <Picker.Item label='C' value='c' />
    //       <Picker.Item label='D' value='d' />
    //       <Picker.Item label='E' value='e' />
    //       <Picker.Item label='F' value='f' />
    //       <Picker.Item label='G' value='g' />
    //       <Picker.Item label='H' value='h' />
    //       <Picker.Item label='I' value='i' />
    //       <Picker.Item label='J' value='j' />
    //       <Picker.Item label='K' value='k' />
    //       <Picker.Item label='L' value='l' />
    //       <Picker.Item label='M' value='m' />
    //       <Picker.Item label='N' value='n' />
    //       <Picker.Item label='O' value='o' />
    //       <Picker.Item label='P' value='p' />
    //       <Picker.Item label='Q' value='q' />
    //       <Picker.Item label='R' value='r' />
    //       <Picker.Item label='S' value='s' />
    //       <Picker.Item label='T' value='t' />
    //       <Picker.Item label='U' value='u' />
    //       <Picker.Item label='V' value='y' />
    //       <Picker.Item label='W' value='w' />
    //       <Picker.Item label='X' value='x' />
    //       <Picker.Item label='Y' value='y' />
    //       <Picker.Item label='Z' value='z' />
    //       <Picker.Item label='0' value='0' />
    //       <Picker.Item label='1' value='1' />
    //       <Picker.Item label='2' value='2' />
    //       <Picker.Item label='3' value='3' />
    //       <Picker.Item label='4' value='4' />
    //       <Picker.Item label='5' value='5' />
    //       <Picker.Item label='6' value='6' />
    //       <Picker.Item label='7' value='7' />
    //       <Picker.Item label='8' value='8' />
    //       <Picker.Item label='9' value='9' />
    //     </Picker>

    //     <Button title='get cocktails' onPress={cocktailByLetter} />

    //     <View style={styles.content}>
    //       <ScrollView>
    //         {cocktailsByLetter.map((cocktail) => {
    //           return (
    //             <View key={cocktail.idDrink} style={styles.list}>
    //               <TouchableOpacity
    //                 onPress={() => pressHandler(cocktail.idDrink)}
    //               >
    //                 <Text style={styles.title}>{cocktail.strDrink}</Text>
    //               </TouchableOpacity>
    //               <Text style={styles.ingredients}>
    //                 {ingredientCapitaliser(cocktail.strIngredient1)},{" "}
    //                 {ingredientCapitaliser(cocktail.strIngredient2)},{" "}
    //                 {ingredientCapitaliser(cocktail.strIngredient3)} ...
    //               </Text>
    //             </View>
    //           );
    //         })}
    //       </ScrollView>
    //     </View>
    //   </View>
    //   {/* </ScrollView> */}
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // backgroundColor: "grey",
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
  content: {
    flex: 0.8,
  },

  list: {
    width: 300,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    backgroundColor: "#cdc1c5",
    width: 500,
    padding: 5,
  },
  ingredients: {
    backgroundColor: "#EEE0E5",
    paddingLeft: 5,
  },
});
