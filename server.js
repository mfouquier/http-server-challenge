import { createServer } from 'node:http';
const port = 3001;
const hostname = 'localhost';
const server = createServer((req, res) => res.end('Hello Galvanize!'))
server.listen(port, () => console.log(`Server running on ${hostname}:${port}`))