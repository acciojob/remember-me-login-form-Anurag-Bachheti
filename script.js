let hiddenBtn = document.getElementById("existing");

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let checkBox = document.getElementById("checkbox");

  if (!name || !password) {
    alert("Either Username or Password is empty");
  } else if (name && password && checkBox.checked) {
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);
    hiddenBtn.innerHTML = "Login as existing user";
    hiddenBtn.style.display = "block";
  } else {
    alert(`Logged in as ${name}`);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    hiddenBtn.style.display = "none";
  }
}
