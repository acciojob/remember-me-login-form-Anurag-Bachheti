let hiddenBtn = document.getElementById("existing");

 document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked(event) {
	event.preventDefault();
	let name = document.getElementById("username").value;
	let password = document.getElementById("password").value; 
	let checkBox = document.getElementById("checkbox");

	if(!name && !password){
		alert("Either Username or Password is empty")
	}else if(name && password && checkBox.checked){
		localStorage.setItem("userData", JSON.stringify({name, password}))
		hiddenBtn.innerHTML = `Username: ${name}, Password: ${password}`;
		hiddenBtn.style.display = "block";
	}else{
		alert(`Logged in as ${name}`)
		localStorage.clear();
		hiddenBtn.style.display = "none";
	}
}