const userInput = document.querySelector("#user-inp");
const searchBtn = document.querySelector("#search-btn");
let result = document.getElementById("result");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
searchBtn.addEventListener("click", function () {
  fetchMeal();
});
function fetchMeal() {
  const meal = userInput.value;
  fetch(url + meal)
    .then((response) => response.json())
    .then((data) => getMeal(data))
    .catch(() => {
      result.innerHTML = `<h3>Invalid Input</h3>`;
    });
  userInput.value = "";
}
function getMeal(data) {
  let myMeal = data.meals[0];
  console.log(myMeal);
  let ingredients = [];
  let count = 1;
  for (let i in myMeal) {
    let measure = "";
    let ingredient = "";
    if (i.startsWith("strIngredient") && myMeal[i]) {
      ingredient = myMeal[i];
      measure = myMeal[`strMeasure` + count];
      count++;
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  console.log(ingredients);

  result.innerHTML = `
  <img src=${myMeal.strMealThumb}>
    <div class="details">
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>
    </div>
    <div id="ingredient-con"></div>
    <div id="recipe">
        <button id="hide-recipe">X</button>
        <pre id="instructions">${myMeal.strInstructions}</pre>
    </div>
    <button id="show-recipe">View Recipe</button>
  `;

  let ingredientCon = document.getElementById("ingredient-con");
  let parent = document.createElement("ul");
  let recipe = document.getElementById("recipe");
  let hideRecipe = document.getElementById("hide-recipe");
  let showRecipe = document.getElementById("show-recipe");

  ingredients.forEach((i) => {
    const child = document.createElement("li");
    child.innerText = i;
    parent.appendChild(child);
    ingredientCon.appendChild(parent);
  });
  hideRecipe.addEventListener("click", () => {
    recipe.style.display = "none";
  });
  showRecipe.addEventListener("click", () => {
    recipe.style.display = "block";
  });
}
