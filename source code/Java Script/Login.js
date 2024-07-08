var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

var loginButton = document.getElementById("loginpop-up");
var registerButton = document.getElementById("registerpop-up");

var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");


loginButton.onclick = function() {
    loginModal.style.display = "block";
}

registerButton.onclick = function() {
    registerModal.style.display = "block";
}

closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

closeRegister.onclick = function() {
    registerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}
