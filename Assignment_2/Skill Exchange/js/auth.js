// Mock database (Replace with backend later)
let users = JSON.parse(localStorage.getItem("users")) || [];

// Login User
function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem("loggedIn", JSON.stringify(user));
    window.location.href = "personal-details.html"; // Redirect to Personal Details
  } else {
    alert("Invalid email or password.");
  }
}

// Create Account
function createAccount() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  if (users.some((user) => user.email === email)) {
    alert("Email already registered!");
    return;
  }

  let newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created successfully!");
  window.location.href = "personal-details.html"; // Redirect
}

// Save Personal Details
function savePersonalDetails() {
  let user = JSON.parse(localStorage.getItem("loggedIn"));
  if (!user) return;

  user.occupation = document.getElementById("occupation").value;
  user.skills = document.getElementById("skills").value;
  user.experience = document.getElementById("experience").value;
  user.location = document.getElementById("location").value;
  user.workLink = document.getElementById("workLink").value;
  user.description = document.getElementById("description").value;

  localStorage.setItem("loggedIn", JSON.stringify(user));
  window.location.href = "home.html"; // Redirect to Profile
}

// Load Profile
function loadProfile() {
  let user = JSON.parse(localStorage.getItem("loggedIn"));
  if (!user) return;

  document.getElementById("profileName").innerText = user.name;
  document.getElementById("profileEmail").innerText = user.email;
  document.getElementById("profileOccupation").innerText = user.occupation;
  document.getElementById("profileSkills").innerText = user.skills;
  document.getElementById("profileExperience").innerText = user.experience;
  document.getElementById("profileLocation").innerText = user.location;
  document.getElementById("profileWorkLink").href = user.workLink;
  document.getElementById("profileDescription").innerText = user.description;
}

// Logout
function logoutUser() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
