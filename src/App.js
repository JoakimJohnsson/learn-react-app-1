import React from "react";
import RecipeList from "./components/recipe/RecipeList";
import {mockData} from "./components/mockData";


function App() {

  return (
    <RecipeList recipes={mockData}/>
  );
}

export default App;
