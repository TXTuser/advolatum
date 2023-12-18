let arrow = document.querySelector(".season-arrow");
let slider = document.querySelector(".season-slider");
let seasonLines = document.querySelectorAll(".line");
console.log(seasonLines);
let counter = 0;
let procent = "100%";

arrow.addEventListener("click", function () {
  let active = document.querySelector(".active-line");
  active.classList.remove("active-line");

  counter++;
  if (counter === slider.children.length) {
    counter = 0;
  }
  seasonLines[counter].classList.add("active-line");
  slider.style.transform = "translateX(-" + counter + "00%)";
});

for (let line of seasonLines) {
  line.addEventListener("click", function () {
    let active = document.querySelector(".active-line");
    active.classList.remove("active-line");
    line.classList.add("active-line");

    counter = Array.prototype.slice.call(seasonLines).indexOf(line);
    slider.style.transform = "translateX(-" + counter + "00%)";
  });
}
