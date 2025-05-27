//your JS code here. If required.
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3-second delay
  });
}

function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter(num => num % 2 === 0);
      document.getElementById("output").innerText = evens.join(",");
      resolve(evens);
    }, 1000); // 1-second delay
  });
}

function doubleNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doubled = arr.map(num => num * 2);
      document.getElementById("output").innerText = doubled.join(",");
      resolve(doubled);
    }, 2000); // 2-second delay
  });
}

// Start the promise chain
getInitialArray()
  .then(filterEvenNumbers)
  .then(doubleNumbers);
