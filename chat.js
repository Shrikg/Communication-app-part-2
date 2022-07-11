var logUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (logUser){
//console.log(logUser)
 var fname = logUser.fullName;
 var email = logUser.email;
//console.log(name);

document.getElementById("userName").innerHTML =fname;

var msgArr=JSON.parse(localStorage.getItem('msg'))?JSON.parse(localStorage.getItem('msg')):[]

for(var i=0;i<msgArr.length;i++){
  var list=document.getElementById('list')
  var li=document.createElement('li')
  li.textContent='['+msgArr[i].date+']'+email+':'+msgArr[i].msg
  list.append(li)
}

var msgFunction=()=>{
var textMsg=document.getElementById('msgText').value;
 var msgObj={
  'msg':textMsg,
  'date':new Date().toLocaleString().replace(",","")
 }
 msgArr.push(msgObj)
 localStorage.setItem('msg',JSON.stringify(msgArr))
 document.getElementById('msgText').value=''
 window.location.reload(true);

}

var reload=()=>{
 window.location.reload(true);
}

var logout=()=>{
  localStorage.removeItem('loggedInUser');
}}
else{
  window.alert("Please login first")
  window.location.href="../html/welcome.html"
}