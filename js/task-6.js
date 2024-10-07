function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", () => {
  clear();
});

function createMarkup() {
  if (input.value > 1 || input.value < 100) {
    createBoxes(input.value);
  }

  return;
}

function createBoxes(amount) {
  clear();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;

    boxes.append(box);

    sizes += 10;
  }
}

function clear() {
  boxes.innerHTML = "";
  input.value = "";
  sizes = 30;
}
