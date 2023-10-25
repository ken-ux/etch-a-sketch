const container = document.querySelector(".container");
const button = document.querySelector("#btn");

button.addEventListener("click", userGeneratedGrid);

function userGeneratedGrid() {
  let num = Number(prompt("How many squares per side do you want?"));
  if (isNaN(num) || num === 0) {
    alert("Please input a number.");
  } else if (num > 100) {
    alert(
      "The maximum number of squares per side is 100. Please choose another number."
    );
  } else {
    clearGrid();
    createGrid(num);
    addEventListeners();
  }
}

function createGrid(num) {
  for (i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (j = 0; j < num; j++) {
      let div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}

function addEventListeners() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "";
    });
  });
}

function clearGrid() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}

// Initial grid on page load
createGrid(16);
addEventListeners();
