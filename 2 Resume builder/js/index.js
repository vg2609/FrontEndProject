// ---------- Toggle Login/Register Forms ----------
function toggleForms() {
  const loginBox = document.getElementById("loginBox");
  const registerBox = document.getElementById("registerBox");

  if (!loginBox || !registerBox) return; // if not on login page, skip

  if (loginBox.style.display === "none") {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
  } else {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
  }
}

// ---------- Register User ----------
function register() {
  const name = document.getElementById("regName")?.value.trim();
  const email = document.getElementById("regEmail")?.value.trim();
  const password = document.getElementById("regPassword")?.value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  // Save user to localStorage
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("Registration successful! Please login.");
  toggleForms();
}

// ---------- Login User ----------
function login() {
  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user registered. Please register first.");
    toggleForms();
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful! Welcome, " + storedUser.name);
    localStorage.setItem("loggedIn", true); // Mark as logged in
    window.location.href = "index.html"; // Redirect home
  } else {
    alert("Invalid email or password");
  }
}

// ---------- Navbar Update on Index Page ----------
function updateNavbar() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const authLink = document.getElementById("authLink");

  if (!authLink) return; // Not on index page

  if (storedUser && loggedIn) {
    // Show Hi Username + Logout
    authLink.innerHTML = `
      <span>Hi, ${storedUser.name}</span> |
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    // Default Login link
    authLink.innerHTML = `<a href="loginRegister.html">Login</a>`;
  }
}

// ---------- Logout Function ----------
function logout() {
  localStorage.removeItem("loggedIn"); // Clear session
  window.location.href = "index.html"; // Reload homepage
}

// ---------- Protect buildResume.html ----------
function protectResumePage() {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Only run this if we are on buildResume.html
  if (document.querySelector(".builder-container")) {
    if (!loggedIn || !storedUser) {
      alert("Please login to build your resume.");
      window.location.href = "loginRegister.html";
    }
  }
}

// ---------- Run when page loads ----------
// ---------- Protect Build My Resume Button ----------
document.addEventListener("DOMContentLoaded", () => {
  updateNavbar();
  protectResumePage();

  const buildBtn = document.querySelector(".build-btn");
  if (buildBtn) {
    buildBtn.addEventListener("click", (e) => {
      const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!loggedIn || !storedUser) {
        e.preventDefault(); // stop navigation
        alert("Please login first to build your resume.");
        window.location.href = "loginRegister.html";
      }
    });
  }
});


function selectTemplate(templateName) {
      // Save selected template to localStorage
      localStorage.setItem("selectedTemplate", templateName);
      // Redirect to buildResume page
      window.location.href = "buildResume.html";
    }


   