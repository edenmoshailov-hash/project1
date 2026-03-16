

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשה
app.use(bodyParser.json());

// מאפשר CORS כדי שה-FE יוכל לשלוח בקשות
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// תוסיף את זה ב-server.js
app.post("/submit", (req, res) => {
    console.log("--------------------------------");
    console.log("הנה הנתונים שהגיעו מהטופס:");
    console.log(req.body); // השורה הזו מדפיסה לטרמינל!
    console.log("--------------------------------");

    res.json({ message: "השרת קיבל את המידע!" });
});
// הפעלת השרת
app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});