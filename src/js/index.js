const items = document.querySelectorAll(
  'body, a, #header, #about, #major, #minor, #skills, #footer, .theme__btn, .section__title, .about__name, .tech'
);
const itemsArray = Array.from(items);
const btn = document.querySelector('.theme__btn');
const icon = document.querySelector('.theme__icon');

btn.addEventListener('click', () => {
  itemsArray.forEach(item => {
    item.classList.toggle('light');
  });

  if (icon.classList.contains('fa-sun')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});
