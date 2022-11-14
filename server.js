import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.end('Hello Galvanize!');
})
server.listen(3001, 'localhost', () => {
  const port = 3001;
  const hostname = 'localhost';
  console.log(`Server running on ${hostname}:${port}`)
})