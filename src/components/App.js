import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeItem from './RecipeItem';
import recipes from '../sample_data/recipes.json';

class App extends Component {
  /*Nothing changes*/
  constructor(props) {
    super(props);
    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  /*Handles the two-way binding relation between Input text and the 
  Search mechanism*/
  searchHandler = (e) => {
    this.setState({
      searchString: e.target.value
    });   
  }

  render() { 
    /* Filters the search text according to the title and ingredients from
    each matched recipe, and returns it applying case sensitive.*/
    let filteredRecipes = this.recipes.filter( 
      rec => { 
        return (rec.title.toString().toLowerCase().includes(this.state.searchString.toLowerCase())
          || rec.ingredients.toString().toLowerCase().includes(this.state.searchString.toLowerCase())
        )
      }
    );

    return (
      <div className="App">
        <Navbar 
          searching={this.searchHandler} /*Reference to the handler*/
          str = {this.state.searchString} /*Sends the Search Text to Input element's value*/
        /> 
        <div className="container mt-10">
          <div className="row">
           <RecipeItem 
              recipeList = {filteredRecipes} /*Desired Recipes are sent to be dynamically rendered*/
              word = {this.state.searchString} /*Search term is sent to be highlighted*/
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
