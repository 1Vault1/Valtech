import '@babel/polyfill';
import '../styles/main.scss';
import '../assets/images/_sprite.svg';

const burger = document.getElementById('burger');
const mainLinks = document.getElementById('mainLinks');

burger.addEventListener('click', onBurgerClick);

function onBurgerClick() {
  mainLinks.classList.toggle('show');
}