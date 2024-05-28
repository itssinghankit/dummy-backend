import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/check", (req, res) => {
    res.json({ message: "Welcome to check route" })

})

app.listen(3000, () => {
    console.log("server started at port 3000")
});