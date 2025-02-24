const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories ${items.length}`);

items.forEach(item => {
  const h2 = item.querySelector('h2').textContent;
  const listItems = item.querySelectorAll('ul li').length;
  console.log(`Category: ${h2} `);
  console.log(`Elements: ${listItems}`);
});

// adding styles
const headers = document.querySelectorAll('h2');
headers.forEach(el => el.classList.add('header'));

const uls = document.querySelectorAll('#categories ul');
uls.forEach(el => el.classList.add('input-list'));

const ulItems = document.querySelectorAll('.item ul li');
ulItems.forEach(el => el.classList.add('input-item'));
