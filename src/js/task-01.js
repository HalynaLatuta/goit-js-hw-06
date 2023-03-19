const listWithItem = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listWithItem.length}`);

const allCategoriesArray = listWithItem.forEach(el => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
