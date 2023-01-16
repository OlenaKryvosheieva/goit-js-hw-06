const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsEl = document.querySelector("#ingredients");

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = `${ingredient}`;
    ingredientEl.classList.add("item");

    return ingredientEl;
});
};

const arrayIngredients = makeIngredients(ingredients);
listIngredientsEl.append(...arrayIngredients);