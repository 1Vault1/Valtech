import '@babel/polyfill';
import '../styles/main.scss';
import '../assets/images/_sprite.svg';

const LINK = 'link';

const burger = document.getElementById('burger');
const mainLinks = document.getElementById('mainLinks');
const header = document.getElementById('header')

window.addEventListener('scroll', onScroll);
burger.addEventListener('click', onBurgerClick);
mainLinks.addEventListener('click', onMainLinksClick);

function onBurgerClick(e) {
  e.preventDefault();
  mainLinks.classList.toggle('show');
  burger.classList.toggle('active');
}

function onScroll() {
  header.classList.add('scrolling');

  if (window.scrollY <= 0) {
    header.classList.remove('scrolling');
  }
}

function onMainLinksClick(e) {
  switch (true) {
    case e.target.classList.contains(LINK):
      e.preventDefault();
      const blockID = e.target.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      mainLinks.classList.remove('show');
      burger.classList.remove('active');
      break;
  }
}