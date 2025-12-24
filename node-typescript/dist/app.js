import { createServer } from 'node:http';
const server = createServer((req, res) => {
    console.log(req.method);
    res.end('Hello Bubub!');
});
server.listen(3000);
//# sourceMappingURL=app.js.map