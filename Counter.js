let count = 0;

function updateCounter() {
  let counter = document.getElementById("counter");
  counter.textContent = count;

  if (count % 2 === 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

function increment() {
  count++;
  updateCounter();
}
function decrement() {
  count--;
  updateCounter();
}

updateCounter();
