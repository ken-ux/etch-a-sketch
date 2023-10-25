const container = document.querySelector(".container");
const button = document.querySelector("#btn");

button.addEventListener("click", userGeneratedGrid);

function userGeneratedGrid() {
  let num = Number(prompt("How many squares do you want?"));
  console.log(num);
  if (isNaN(num) || num === 0) {
    console.log("Please input a number.");
  } else if (num > 100) {
    console.log(
      "The maximum number of squares is 100. Please choose another number."
    );
  } else {
    clearGrid()
    createGrid(num);
    addEventListeners();
  }
}

function createGrid(num) {
  for (i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}

function addEventListeners() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "blue";
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "";
    });
  });
}

function clearGrid() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.remove();
  });
}

// Initial grid on page load
createGrid(10);
addEventListeners();
