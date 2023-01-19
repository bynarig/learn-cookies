import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser())

app.get("/", (req, res) =>{
    res.send("ban")
})

app.get("/set-cookie", (req, res) => {
    res.setHeader('set-cookie', "foo=bar", { // foo - name of cookie || bar is value of cookie (without using cookie-parser)
        maxAge: "1h", // how long cookie live
        httpOnly: true, // Only for cookies that heed oly for back-end
        secure: true // https only use
    })
    res.cookie('foo', "bar", {}) // foo - name of cookie || bar is value of cookie && USING COOKIE PARSER
    res.send("foo=bar is set")
})

app.get("/get-cookie", (req, res) => {
    console.log(req.cookies.foo ) // responses with value of foo cookie
    res.send(req.cookies) // responses with all coolies in user`s browser linked with this page
})

app.get("/del-cookie", (req, res) => {
    req.clearCookie("foo") // clears cookie with name "foo"
    res.send("Cookie foo deleted")
})

app.listen(8000, console.log("Started on 8000"))
