import './image-slider.css';

export default function imageSlider() {
  const create = (type) => document.createElement(type);

  const container = create('div');
  container.id = 'image-slider-container';

  const slides = [];

  const slider = create('div');
  slider.id = 'image-slider';
  const backward = create('div');
  backward.id = 'image-slider-backward';
  slider.append(backward);

  // Images have to be hard coded in the css
  const max = 5;
  // change max to the number of images
  for (let i = 0; i < max; i += 1) {
    const image = create('div');
    image.id = `image-slider-image-${i + 1}`;
    image.classList.add('image-slider-image');
    slides.push(image);
    slider.append(image);
  }

  const forward = create('div');
  forward.id = 'image-slider-forward';
  slider.append(forward);

  container.append(slider);

  const select = (img) => {
    container.className = `${
      img.id.match(/image-slider-(?<img>image-\d*)/).groups.img
    }`;
    slides.forEach((slide) => {
      slide.classList.remove('selected');
    });
    img.classList.add('selected');
  };

  let transition = false;

  const next = () => {
    if (transition) return;
    transition = true;
    const current = Number(
      container.className.match(/image-(?<num>\d*)/).groups.num
    );
    select(slides[(current >= max ? 1 : current + 1) - 1]);

    setTimeout(() => {
      transition = false;
    }, 1000);
  };

  setInterval(next, 5000);

  const prev = () => {
    if (transition) return;
    transition = true;
    const current = Number(
      container.className.match(/image-(?<num>\d*)/).groups.num
    );
    select(slides[(current <= 1 ? max : current - 1) - 1]);

    setTimeout(() => {
      transition = false;
    }, 1000);
  };

  forward.addEventListener('click', next);
  backward.addEventListener('click', prev);

  slides.forEach((img) => {
    img.addEventListener('click', () => {
      select(img);
    });
  });

  select(slides[0]);
  return container;
}
