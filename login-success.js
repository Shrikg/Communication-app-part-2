var logUser = JSON.parse(localStorage.getItem('loggedInUser'));
if(logUser){
//console.log(logUser)
 var email = logUser.email;
// console.log(email);
document.getElementById("userEmail").innerHTML =email;
}else{
    window.alert("Please login first")
    window.location.href="../html/welcome.html"
  }