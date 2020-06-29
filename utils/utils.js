ingredientCapitaliser = (ingredients) => {
  if (ingredients) {
    str = ingredients.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  } else {
    return "";
  }
};

replaceSpace = (string) => {
  return string.split(" ").join("_");
};

module.exports = {
  ingredientCapitaliser,
  replaceSpace,
};
