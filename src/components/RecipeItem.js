import React from 'react';
import Highlighter from "react-highlight-words"; 

const RecipeItem = (props) => (
    /*Maps every element, sets each thumbnail, title, link, and ingredients
    to its corresponding elements*/
    props.recipeList.map((recipe, i) => {
        return (
            <div key={i} className="col-sm-3 mt-4">
                <div className="card">
                    <a href={recipe.href} /*Link*/ >
                        <img className="card-img-top img-fluid" 
                            src={recipe.thumbnail} /*Thumbnail (low resolution, unfortunalely)*/
                            alt={recipe.title} /*#PraCegoVer dynamically rendered accessibility*/
                        />
                    </a>
                        <div className="card-body">                            
                            <h5 key={recipe.title} className="card-title">                                
                                <Highlighter        /*Wrapped in a safe component, Out of the risk of 
                                                    code injection and related problems*/
                                    searchWords={[props.word]} /*The search word(s) to be highlighted. It/they must be in a list*/
                                    autoEscape={true} /*Safety in Regex from Escape Characters*/
                                    textToHighlight={recipe.title} /*Where we want to be highlighted, the basis text*/
                                />
                            </h5>
                            <p  key={recipe.ingredients} className="card-text">
                                <strong>Ingredients: </strong>
                                <Highlighter        /*The same as above*/
                                    searchWords={[props.word]}
                                    autoEscape={true}
                                    textToHighlight={recipe.ingredients} /*But this time the basis is the Ingredient list*/
                                />
                            </p>
                        </div>
                </div>
            </div>
        )
    })
)

export default RecipeItem;