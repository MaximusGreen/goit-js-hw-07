const categoriesList = document.querySelector("#categories");

const items = categoriesList.querySelectorAll("li.item");

console.log("Кількість категорій:", items.length);

items.forEach(item => {
  const title = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;
  console.log(`Категорія: ${title}, Кількість елементів: ${itemCount}`);
});