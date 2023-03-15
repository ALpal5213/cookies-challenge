import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8080;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Navigate to /login?name=YOUR_NAME');
})

app.get('/login', function(req, res) {
    let name = req.query.name;

    // define cookie attributes
    var opts = {
      maxAge: 900000,
      httpOnly: true,
      sameSite: 'strict',
    };
  
    // add a cookie to the response
    res.cookie('name', `${name}`, opts);
    res.send('Navigate to /hello');
})

app.get('/hello', (req, res) => {
    let name = req.cookies.name;
    res.send(`Welcome ${name}!`);
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}...`))