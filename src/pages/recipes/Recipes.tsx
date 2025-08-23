import "./Recipes.css"
import { useState } from "react";
import { api } from "../../api";
import { useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const res  = await api.get("/recipes");
        const data = await res.data
        setRecipes(data.recipes);
        console.log(data.recipes);
        setLoading(false)
      })()
    }, 1000)
  },[])


  return (
    <>
    <div className="main-container">
      {loading? <div className="loading-box">
        <div className="loading-spinner"></div>
        Loading...
      </div> : null}

      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h1>Name: {recipe.name}</h1>
          <h1>Calories per saving: {recipe.caloriesPerServgin}</h1> 
          <h2>Coot time: {recipe.cookTime}</h2>
          <h2>Cousine: {recipe.cousine}</h2>
          <h2>Difficulty: {recipe.difficulty}</h2>
          <img src={recipe.image}/>
          <h3>Time: {recipe.prepTimeMinutes}</h3>
          <h3>Rating: {recipe.rating}</h3>
          <h3>servgins: {recipe.servings}</h3>
          <div>
            {recipe.tags.map((tag: any) => (
              <div>
                <h1>{tag}</h1>
              </div>
            ))}
          </div>
          <div>
            {recipe.ingredients.map((ingredient: any) => (
              <p>{ingredient}</p>
            ))}
          </div>
          <div>
            {recipe.instructions.map((instruction: any) => (
              <p>{instruction}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  )  
};

export default Recipes;
