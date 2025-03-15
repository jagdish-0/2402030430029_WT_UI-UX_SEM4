document.addEventListener("DOMContentLoaded", function () {
  const swapButtons = document.querySelectorAll(".profile-card button");

  swapButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent === "SWAP") {
        this.textContent = "UNSWAP";
        this.style.backgroundColor = " gray "; // Change color for "UNSWAP"
      } else {
        this.textContent = "SWAP";
        this.style.backgroundColor = "#4A3F35"; // Reset color for "SWAP"
      }
    });
  });
});
