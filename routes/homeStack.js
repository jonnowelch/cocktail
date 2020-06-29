import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import About from "../screens/about";
import Cocktail from "../screens/cocktailPage";

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
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
