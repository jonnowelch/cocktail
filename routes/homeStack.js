import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import About from "../screens/about";
import Cocktail from "../screens/cocktailPage";
import IngredientInfo from "../screens/ingredientInfo";

const screens = {
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
  Cocktail: {
    screen: Cocktail,
  },
  IngredientInfo: {
    screen: IngredientInfo,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
