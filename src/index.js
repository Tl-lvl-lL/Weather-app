import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

let app = express();
app.listen(3000, () => {
    console.log("Running");
});

app.get("/", (req, res) => {
    res.sendFile(
        "/home/mariano/Code/backend_projects/weather-app/src/index.html"
    );
});
