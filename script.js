const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("child");
    container.appendChild(div);
}

console.log(document.querySelectorAll(".child"));