const SESSION_KEY = "asrahfc_logged_in";
function isLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "true";
}
function setLoggedIn(val) {
  localStorage.setItem(SESSION_KEY, val ? "true" : "false");
}
function togglePassword(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return;
  el.type = el.type === "password" ? "text" : "password";
}
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

//auth.html -> sued for show notice to login or signup
document.addEventListener("DOMContentLoaded", () => {
  const authNotice = document.getElementById("authNotice");
  if (!authNotice) return;
  const page = getParam("page");
  const next = getParam("next");

  if (!isLoggedIn() && page && next) {
    authNotice.classList.remove("d-none");
    authNotice.classList.remove("alert-success");
    authNotice.classList.add("alert-warning");
    authNotice.innerHTML = `⚠️ Please <strong>Login</strong> or <strong>Sign Up</strong> to continue to <strong>${page}</strong>.`;
  }

  if (isLoggedIn() && next) {
    authNotice.classList.remove("d-none");
    authNotice.classList.remove("alert-warning");
    authNotice.classList.add("alert-success");
    authNotice.innerHTML = `✅ You are already logged in. <a class="btn btn-success btn-sm ms-2" href="${next}">Continue</a>`;
  }
});

//login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginError = document.getElementById("loginError");
    const hardcodedCredentials = { username: "admin", password: "password123" };
    
    if (username === hardcodedCredentials.username && password === hardcodedCredentials.password) {
      setLoggedIn(true);
      const next = getParam("next");
      window.location.href = next ? next : "dashboard.html";
    } else {
      loginError.style.display = "block";
      loginError.textContent = "Invalid username or password. Try admin / password123";
    }
  });
}

//signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const signupMsg = document.getElementById("signupMsg");
    signupMsg.style.display = "block";
    signupMsg.textContent = "Account created (simulated). Please login using admin / password123";
    signupForm.reset();
  });
}
