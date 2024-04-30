function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  const boxes = createBoxes(amount);
  appendBoxesToContainer(boxes);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
    fragment.appendChild(box);
  }
  return { fragment, boxes };
}

function appendBoxesToContainer({ fragment }) {
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
