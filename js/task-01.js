const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl)
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoryEl = document.querySelectorAll(".item");
// console.log(categoryEl);
categoryEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  console.log(`Category: ${titleEl}`);

  const elementsEl = item.lastElementChild.children.length;
  console.log(`Elements: ${elementsEl}`);
});
