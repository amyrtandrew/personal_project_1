import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const EditRecipe = () => {
  const { recipeId } = useParams();
  const [values, setValues] = useState({
    recipeName: "",
    servings: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    notes: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:5555/api/recipe/" + recipeId)
      .then((res) => {
        setValues({
          ...values,
          recipeName: res.data.recipeName,
          servings: res.data.servings,
          instructions: res.data.instructions,
          prepTime: res.data.prepTime,
          cookTime: res.data.cookTime,
          notes: res.data.notes,
        });
        // console.log(res.data.recipeName);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5555/api/recipe/" + recipeId, values)
      .then((res) => {
        navigate(`/recipe/${res.data.recipeId}`);
        // console.log(res.data.recipeName);
      })
      .catch((err) => console.log(err));
  };

  // app.put("/api/recipe/:recipeId", async (req, res) => {
  //   const { recipeId } = req.params;
  //   const recipe = await Recipe.findByPk(recipeId);
  //   res.json(recipe);
  // });

  return (
    <div>
      <form className="create-recipe-form" onSubmit={handleSubmit}>
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          name="recipeName"
          id="recipeName"
          type="text"
          required
          placeholder="name"
          value={values.recipeName}
          onChange={(e) => setValues({ ...values, recipeName: e.target.value })}
        />

        <label htmlFor="servings">Servings:</label>
        <input
          name="servings"
          id="servings"
          type="text"
          value={values.servings}
          onChange={(e) => setValues({ ...values, servings: e.target.value })}
        />
        <label htmlFor="instructions">Instructions:</label>
        <input
          name="instructions"
          id="instructions"
          type="text"
          required
          value={values.instructions}
          onChange={(e) =>
            setValues({ ...values, instructions: e.target.value })
          }
        />
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          name="prepTime"
          id="prepTime"
          type="text"
          value={values.prepTime}
          onChange={(e) => setValues({ ...values, prepTime: e.target.value })}
        />
        <label htmlFor="cookTime">Cook Time:</label>
        <input
          name="cookTime"
          id="cookTime"
          type="text"
          value={values.cookTime}
          onChange={(e) => setValues({ ...values, cookTime: e.target.value })}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          name="notes"
          id="notes"
          type="text"
          value={values.notes}
          onChange={(e) => setValues({ ...values, notes: e.target.value })}
        />
        <button type="submit">Add Recipe</button>
      </form>
      <div className="home-link">
        <Link to="/recipe-grid">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default EditRecipe;

// const EditRecipe = () => {
//   return (
//     <div>EditRecipe</div>
//   )
// }

// export default EditRecipe
