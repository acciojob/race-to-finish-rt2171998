
function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function createPromise() {
      const randomTime = getRandomTime(1000, 5000);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`Resolved after ${randomTime} milliseconds`);
        }, randomTime);
      });
    }
const promises = Array.from({ length: 5 }, createPromise);
window.promises = [promises];
Promise.any(promises)
      .then(result => {
        document.getElementById("output").textContent = result;
      })
      .catch(error => {
        console.log("All promises rejected:", error);
      });
// Do not change the code above this
// add your promises to the array `promises`
