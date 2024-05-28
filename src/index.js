import express from "express";
import brcypt from "bcryptjs"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/check", (req, res) => {
    res.json({ message: "Welcome to check route" })

})

app.get("/run", (req, res) => {
    res.status(200).json({
        message:"working fine"
    })
})

app.listen(3000, () => {
    console.log("server started at port 3000")
});