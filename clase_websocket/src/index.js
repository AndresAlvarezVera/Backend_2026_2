import express from 'express';
import { URLtoFileURL } from 'url';

const __filename = URLtoFileURL(import.meta.url).pathname;
const __dirname = __filename.substring(0, __filename.lastIndexOf('/'));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})