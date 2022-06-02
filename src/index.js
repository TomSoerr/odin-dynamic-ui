import './index.css';
import DropDown from './dropDown';
import MobileMenu from './mobileMenu';
import imageSlider from './imageSlider';

const content = document.createElement('div');
content.id = 'content';
document.body.append(content);

class Main {
  #headerDiv;

  #content;

  constructor() {
    const create = (type) => document.createElement(type);
    const options = ['Home', 'About', 'Contact'];

    this.#headerDiv = create('div');
    this.#headerDiv.id = 'header';
    const headerText = create('h1');
    headerText.innerText = 'Dynamic UI';

    const menu = new DropDown('More', ...options);
    const mobileMenu = new MobileMenu(...options);

    this.#headerDiv.append(headerText, menu.getDom(), mobileMenu.getDom());

    let i = 0;
    menu.getOptions().forEach((option) => {
      const name = options[i];
      option.addEventListener('click', () => {
        console.log(name);
      });
      i += 1;
    });

    i = 0;
    mobileMenu.getOptions().forEach((option) => {
      const name = options[i];
      option.addEventListener('click', () => {
        console.log(name);
      });
      i += 1;
    });

    this.#content = imageSlider();
  }

  getDom = () => [this.#headerDiv, this.#content];
}

const main = new Main();
content.append(...main.getDom());
