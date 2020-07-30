  const recipes = document.querySelectorAll(".recipe")

  for (let recipe of recipes) {
    recipe.addEventListener("click", function () {
      let recipeId = recipe.getAttribute("id");
      window.location.href = `/receitas/${recipeId - 1}`;
    });
  }


