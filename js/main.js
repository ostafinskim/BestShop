const nav = document.querySelector('.nav');
const btn = document.querySelector('.nav__toggle--js');

btn.addEventListener('click', () => {
  if (!nav.classList.contains('active')) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
  if (nav.classList.contains('active')) {
    btn.classList.add('show-btn');
  } else {
    btn.classList.add('hide-btn');
  }
});

const links = document.querySelectorAll(".nav__list li a");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}