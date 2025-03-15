// Toggle Swap/Unswap
function toggleSwap(button) {
  if (button.innerText === "SWAP") {
    button.innerText = "UNSWAP";
    button.style.backgroundColor = "gray";
  } else {
    button.innerText = "SWAP";
    button.style.backgroundColor = "#4A3F35";
  }
}

// Accept Request
function acceptRequest(button) {
  let card = button.closest(".card");
  card.innerHTML = `<p style="color: green; font-weight: bold;">Request Accepted ✅</p>`;
  setTimeout(() => card.remove(), 2000); // Remove after 2 seconds
}

// Delete Request
function deleteRequest(button) {
  let card = button.closest(".card");
  card.innerHTML = `<p style="color: red; font-weight: bold;">Request Deleted ❌</p>`;
  setTimeout(() => card.remove(), 2000); // Remove after 2 seconds
}
