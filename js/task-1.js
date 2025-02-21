const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories ${items.length}`);

items.forEach((item) => {
  const h2 = item.querySelector("h2").textContent;
  const listItems = item.querySelectorAll("ul li").length;
  console.log(`Category: ${h2} `);
  console.log(`Elements: ${listItems}`);
});
