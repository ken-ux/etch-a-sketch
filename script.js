const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "blue";
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "";
  });
});

console.log(document.querySelectorAll(".square"));
