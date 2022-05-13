import fetch from "node-fetch";
import axios from "axios";

async function takeAPI() {
    await fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.text())
        .then((text) => console.log(JSON.parse(text)));
}

takeAPI();

axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
