function registrer(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let validatePassword = document.getElementById("validatePassword").value;


    let person = {
        name,
        email,
        password,
    }

    if(!email || !password || !name || !validatePassword){
        return;
    }else{
        localStorage.setItem(("person"), JSON.stringify(person));
        window.location.href = "../html/login.html";
    }

}



function checkPassword(){
    let password = document.getElementById("password").value;
    let validatePassword = document.getElementById("validatePassword").value;

    if(validatePassword === password){
        document.getElementById("feedback").innerHTML = "Macth";
        document.getElementById("feedback").style.color = "green";
    }else{
        document.getElementById("feedback").innerHTML = "Passordene er ikke det samme";
        document.getElementById("feedback").style.color = "red";
    }
}


function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let person = JSON.parse(localStorage.getItem("person"));

    let isMail = person.email === email;
    let isPassword = person.password === password;

    if(isMail && isPassword){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "../index.html"
    }else{
        document.getElementById("loginFeedback").innerHTML = "Email eller passord matcher ikke";
        document.getElementById("loginFeedback").style.color = "red";
    }
    

}


function logout(){
    localStorage.removeItem("person");
    localStorage.removeItem("loggedIn");
    window.location.href = "../html/login.html";
}