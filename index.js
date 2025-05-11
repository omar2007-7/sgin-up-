import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let info = {};
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("log.ejs");
});

app.post("/home", (req, res) => {
    info = req.body;
    res.render("home.ejs", {
        user: info.user,
     
    });
});
app.post("/start",(req,res)=>{
    info = req.body;

})

app.get("/profile", (req, res) => {
    res.render("profile.ejs", {
        user: info.user,
        email: info.email,
        password: info.password,
    });
});
app.get("/store", (req, res) => {
    res.render("store.ejs");
});
app.get("/start", (req, res) => {
    res.render("start.ejs", {
        user: info.user,
        email: info.email,
        password: info.password,
    });
});
app.get("/home", (req, res) => {
    res.render("home.ejs", { user: info.user });
});


app.listen(port, () => {
    console.log("server is on...");
});
