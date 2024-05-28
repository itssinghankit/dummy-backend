import express from "express";
import bcrypt from "bcryptjs"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/check", async(req, res) => {
    
    const password = "password";
    const hashed = await bcrypt.hash(password,10);
    const isMatch = await bcrypt.compare(password,hashed);

    res.status(200).json({
        hashed:hashed,
        isMatch:isMatch
    })

})

app.get("/run", (req, res) => {
    res.status(200).json({
        message:"working fine"
    })
})

app.listen(3000, () => {
    console.log("server started at port 3000")
});