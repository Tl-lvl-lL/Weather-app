import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __url = fileURLToPath(import.meta.url);
let urlPared = path.parse(__url);

let app = express();
app.listen(3000, () => {
    console.log("Running");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__url, "../index.html"));
});
