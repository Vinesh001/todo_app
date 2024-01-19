const names = document.getElementById("names")
const usernames = document.getElementById("usernames")
const passwords = document.getElementById("passwords")
const btn = document.getElementById("signup_btn")
  
function parseResponse(parseData){
    console.log("vviensh")
    console.log(parseData);
    if(parseData){
        console.log(parseData);
        window.location.href='http://127.0.0.1:5500/todo_app/frontend/todo.html'
    }else{
        console.log("something went wrong!")
    }
    // funcAdd(parseData.data)
}
function callback(res) {
    console.log(res);
    res.json().then(parseResponse);
}
function signupfunc(){
    const name = names.value;
    const username = usernames.value;
    const password = passwords.value;
    console.log({name, username, password});
    fetch('http://localhost:3000/users',{
        method:"POST",
        body:JSON.stringify({
            name:name,
            userName:username,
            password:password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(callback);
}


btn.addEventListener('click', function(e){
    e.preventDefault();
   signupfunc();
});