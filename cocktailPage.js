{
  /* <Text style={styles.text}> {data.strDrink}</Text>
<Text style={styles.text}>
  Alcoholic:
  {data.strAlcoholic == "Non alcoholic" ? (
    <Text> No</Text>
  ) : (
    <Text>Yes</Text>
  )}
</Text>
<Text style={styles.text}> {data.strGlass}</Text>
<Text style={styles.text}>
  {data.strIngredient1}
  {data.strMeasure1}
</Text>
<Text style={styles.text}>
  {data.strIngredient2}
  {data.strMeasure2}
</Text>
<Text style={styles.text}>
  {data.strIngredient3}
  {data.strMeasure3}
</Text>
<Text style={styles.text}>
  {data.strIngredient4}
  {data.strMeasure4}
</Text>
<Text style={styles.text}>
  {data.strIngredient5}
  {data.strMeasure5}
</Text>
<Text style={styles.text}>
  {data.strIngredient6}
  {data.strMeasure6}
</Text>
<Text style={styles.text}>
  {data.strIngredient7}
  {data.strMeasure7}
</Text>
        <Text style={styles.text}>Method: {data.strInstructions}</Text> 
        
     componentDidMount() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=long_island_iced_tea"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.drinks[0] });
      })
      .catch((error) => {})
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }     
          const { data } = this.state;
    text: {
    color: "white",
    paddingHorizontal: 30,
  },
        
        */
}
