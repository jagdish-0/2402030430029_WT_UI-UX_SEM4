// Function to redirect to the specified page
function redirectTo(page) {
  window.location.href = page;
}

// Attach event listeners to navigation buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-redirect]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetPage = button.getAttribute("redirectTo");
      redirectTo(targetPage);
    });
  });
});
