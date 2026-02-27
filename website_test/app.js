const express = require('express')
const app = express()
const location = require('path')
const user_data = require('./users.json')

app.use(express.json())
app.use(express.static("./website_test"))
app.get("/",(req,res) => {
        res.redirect("/login")
})
app.get("/login",(req,res) => {
        res.status(200).sendFile(location.resolve(__dirname,"./login_page_files/login (1).html"))
})
app.post("/api/login",(req,res) =>{
        const {username, password} = req.body
        if(user_data[0].username == username && user_data[0].password == password){
            user_data.logged_in = true
            res.json({"success":true})
        }
})
app.get("/dashboard",(req,res)=>{
    res.sendFile(location.resolve(__dirname,"./dashboard_files/dashboard (1).html"))
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})


