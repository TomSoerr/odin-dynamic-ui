import './mobile-menu.css';

export default class MobileMenu {
  #mobileMenuDiv;

  constructor(...options) {
    const create = (type) => document.createElement(type);

    this.#mobileMenuDiv = create('div');
    this.#mobileMenuDiv.id = 'mobile-menu-box';
    options.forEach((option) => {
      const mobileMenuOptionSpan = create('span');
      mobileMenuOptionSpan.textContent = option;
      this.#mobileMenuDiv.append(mobileMenuOptionSpan);
    });
  }

  getOptions() {
    return [...this.#mobileMenuDiv.children];
  }

  getDom() {
    return this.#mobileMenuDiv;
  }
}
