function isAuthenticated(){
    return localStorage.getItem("loggedIn") === "true";
}


function denyWebsite(){
    if(!isAuthenticated()){
        window.location.href = "../html/login.html";
    }
}


if(window.location.pathname.includes("klasseside.html")){
    denyWebsite()
}