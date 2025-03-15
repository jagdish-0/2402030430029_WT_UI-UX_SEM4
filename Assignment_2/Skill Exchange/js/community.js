function redirectTo(page) {
  window.location.href = page;
}

// Search functionality (basic)
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar input");
  searchInput.addEventListener("input", function () {
    console.log("Searching for:", searchInput.value);
  });
});
