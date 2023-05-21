const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 8000;

// Dynamic
const hbspath=path.join(__dirname,"../public");
app.use(express.static(hbspath));

const hbs=require('hbs');
app.set('view engine','hbs');

const viewpath=path.join(__dirname,"../public/templates/views");
app.set("views",viewpath);

const partialpath=path.join(__dirname,"../public/templates/partials");
hbs.registerPartials(partialpath);

app.get("",(req,res)=>{
    res.render("index.hbs");
});
app.get("/about",(req,res)=>{
    res.render("about.hbs");
});
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});
app.get("*",(req,res)=>{
        res.render("404error.hbs");
});

app.listen(port,()=>{
    console.log("Listening");
});
