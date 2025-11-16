const USERNAME = "rony";
const PASSWORD = "12345";
const path = window.location.pathname;


if(path.includes("login.html")){
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const errorMsg = document.querySelector(".error");



loginBtn.addEventListener("click", () => {
const user = usernameInput.value.trim();
const pass = passwordInput.value.trim();

if (user === USERNAME && pass === PASSWORD) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "home.html";
        } else {
            errorMsg.textContent = "❌ Invalid username or password!";
        }

});

} 


if (path.includes("home.html")) {

     const logoutBtn = document.querySelector(".logout-btn");
      if (localStorage.getItem("isLoggedIn") !== "true") {
         window.location.href = "login.html";
      }

      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });
}

