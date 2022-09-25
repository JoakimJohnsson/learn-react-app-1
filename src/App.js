import React from "react";
import RecipeList from "./components/RecipeList";
import {mockData} from "./components/mockData";


function App() {

  return (
    <RecipeList recipes={mockData}/>
  );
}

export default App;
