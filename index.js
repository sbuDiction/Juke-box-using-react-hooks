const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./server/src/routes/v1.router');


app.use(router);
app.use(cors);
app.use(express.static('client/build'));

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: err.message });
});


app.use((req, res) => {
    res.status(404);
    res.send({ error: "Sorry, can't find that" });
});

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});