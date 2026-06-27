// Get users from LocalStorage
let users = JSON.parse(localStorage.getItem("users")) || [];
// Register Form

document.getElementById("regForm").onsubmit= function (e) {
e.preventDefault();
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
// Check Email

if (users.find(user => user.email === email)) {
alert("Email already exists!");
return;
}
users.push({
    id: Date.now(),
    name: name,
    email: email,
    password: password

});
localStorage.setItem("users",JSON.stringify(users));
alert("Regestration Successful!");
location.herf = "index.html";
};