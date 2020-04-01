const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const container = document.querySelector('.img-container');
const images = [
  'contBcg-0.jpeg',
  'contBcg-1.jpeg',
  'contBcg-2.jpeg',
  'contBcg-3.jpeg',
  'contBcg-4.jpeg'
];

let counter = 0;

btnLeft.addEventListener('click', back);
btnRight.addEventListener('click', forward);

function back() {
    counter--;
    if (counter < 0) {
      counter = images.length - 1;
    }
  container.style.backgroundImage = `url('./img/${images[counter]}')`;
}

function forward() {
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  container.style.backgroundImage = `url('./img/${images[counter]}')`;
};