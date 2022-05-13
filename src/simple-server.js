import http from "http";
const middleware = () => {
    return false;
};

let server = http
    .createServer((req, res) => {
        console.log(res.statusCode);
        var url = req.url;

        if (url === "/about") {
            if (middleware()) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(" Welcome to about us page");
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.write("You are not admit here");
                res.end();
            }
        } else if (url === "/contact") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>Hello world!</h1>");
            res.write(" Welcome to contact us page");
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Hello World!");
            res.end();
        }
        res.end();
    })
    .on("connection", () => {
        console.log("object");
    });
server.listen(5013);
