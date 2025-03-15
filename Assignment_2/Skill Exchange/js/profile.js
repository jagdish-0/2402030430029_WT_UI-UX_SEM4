function redirectToNotifications() {
  window.location.href = "notification.html";
}
function logoutUser() {
  // Clear user session (example: localStorage or sessionStorage)
  localStorage.removeItem("userSession");
  sessionStorage.removeItem("userSession");

  // Redirect to login page
  window.location.href = "login.html";
}
