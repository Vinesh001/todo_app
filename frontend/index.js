const usernamel = document.getElementById("usernamel")
const passwordl = document.getElementById("passwordl")
const btn = document.getElementById("login_btn")


function parseResponse(parseData){
    console.log(parseData)
    if(parseData){
        window.location.href='http://127.0.0.1:5500/todo_app/frontend/todo.html'
    }else{
        console.log("something went wrong!")
    }
}
function callback(res){
    res.json().then(parseResponse);
}
function loginfunc(){
    const userName = usernamel.value;
    const password = passwordl.value;
    console.log(userName, password)

    fetch('http://localhost:3000/auth',{
        method:"POST",
        body: JSON.stringify({
            userName:userName,
            password:password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(callback);
}

btn.addEventListener('click', function(e){
    e.preventDefault();
   loginfunc();
});