const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(cookieParser());

app.get('/api/health', (req, res) => {
    console.log(`request header: ${JSON.stringify(req.headers)}`);
    console.log(`cookie in request: ${JSON.stringify(req.cookies)}`);
    const apiCallCount = parseInt(req.cookies['apiCallCount']) || 0;
    res.cookie('apiCallCount', apiCallCount+1);
    // res.cookie('apiCallCount', apiCallCount+1, {domain: "example.com"});
    // res.cookie('apiCallCount', apiCallCount+1, {path: "/cookie"});
    // res.cookie('apiCallCount', apiCallCount+1, {expires: new Date(Date.now()+10000)});
    // res.cookie('apiCallCount', apiCallCount+1, {maxAge: 10000});
    // res.cookie('apiCallCount', apiCallCount+1, {httpOnly: true});
    // res.cookie('apiCallCount', apiCallCount+1, {secure: true});
    // res.cookie('apiCallCount', apiCallCount+1, {signed: true});
    // res.cookie('apiCallCount', apiCallCount+1, {sameSite: true});
    res.status(200).json({ result: 'success' });
  });


app.use(express.static('.'));

module.exports = app;
