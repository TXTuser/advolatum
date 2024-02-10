let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let prices = document.querySelectorAll(".price");
let allSum = document.getElementById("allSum");

for (let m in minus) {
  let minusButton = minus[m];
  let plusButton = plus[m];
  minusButton.onclick = function (event) {
    let prodAmount = minusButton.nextElementSibling.innerHTML - 1;
      if(prodAmount == -1) {
        prodAmount = 0
      } else {
        recount(prices[m].innerHTML, false)
      }
      minusButton.nextElementSibling.innerHTML = prodAmount
  };
  plusButton.onclick = function (event) {
    recount(prices[m].innerHTML, true)
    plusButton.previousElementSibling.innerHTML =
      parseInt(plusButton.previousElementSibling.innerHTML) + 1;
  };
}


function recount(prices, increase) {
  if(increase) {
    allSum.innerHTML = parseInt(allSum.innerHTML) + parseInt(prices)
  }else {
    allSum.innerHTML = parseInt(allSum.innerHTML) - parseInt(prices)
  }
console.log(prices);
}