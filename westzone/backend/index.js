
import express from "express";

const app = express();

app.get("/data", (req, res) => {
    res.send({
        fullName: "Stefanie Martini"
    });
    
});

app.listen(process.env.PORT || 3000);