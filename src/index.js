import './styles.css';
import menu from './menu.json';
import menuTemplate from './menu.hbs';
const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  checkBox: document.querySelector('input.js-switch-input'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const handleChangeTheme = () => {
  if (refs.checkBox.checked) {
    refs.body.classList.add(Theme.DARK);

    save();
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);

    save();
  }
};

const save = () => {
  localStorage.setItem('checkBoxChecked', refs.checkBox.checked);
};
const checked = JSON.parse(localStorage.getItem('checkBoxChecked'));
const render = () => {
  if (checked) {
    refs.body.classList.add(Theme.DARK);
    refs.checkBox.checked = checked;
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
  refs.menu.insertAdjacentHTML('beforeend', menuTemplate(menu));
};

refs.checkBox.addEventListener('change', handleChangeTheme);
render();
