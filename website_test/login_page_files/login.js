async function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-msg")
    const request_body = {username,password}
    const request = await fetch("/api/login",{
        method: "POST",
        body: JSON.stringify(request_body),
        headers:{
            "Content-type": "application/json"
        }
    })
    const response = await request.json()
    if(response.success){
        window.location.href = "/dashboard"
    }
    else{
        error.textContent = "Incorrect username or password"
    }
}

