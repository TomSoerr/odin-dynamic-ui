import './drop-down.css';

export default class DropDown {
  #dropDownDiv;

  constructor(boxName, ...options) {
    const create = (type) => document.createElement(type);

    this.#dropDownDiv = create('div');
    this.#dropDownDiv.id = 'drop-down-box';
    this.#dropDownDiv.append(boxName);

    const dropDownOptionsDiv = create('div');
    dropDownOptionsDiv.id = 'drop-down-options';
    dropDownOptionsDiv.classList.add('hidden');
    options.forEach((option) => {
      const dropDownOptionSpan = create('span');
      dropDownOptionSpan.textContent = option;
      dropDownOptionsDiv.append(dropDownOptionSpan);
    });

    this.#dropDownDiv.append(dropDownOptionsDiv);
    this.#dropDownDiv.addEventListener('click', (e) => {
      e.stopPropagation();
      dropDownOptionsDiv.classList.toggle('hidden');
    });
  }

  getOptions() {
    return [...this.#dropDownDiv.children[0].children];
  }

  getDom() {
    return this.#dropDownDiv;
  }
}
