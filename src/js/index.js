const items = document.querySelectorAll(
  'body, a, #header, #about, #major, #minor, #skills, #footer, .themeBtn, .section__title, .about__name, .tech'
);
const itemsArray = Array.from(items);
const btn = document.querySelector('.themeBtn');

btn.addEventListener('click', () => {
  itemsArray.forEach(item => {
    item.classList.toggle('light');
  });
});
