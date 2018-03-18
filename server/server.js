let express = require('express');
let app = express();
const PORT = 5000;

app.use(express.static('server/public'));
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


app.post('/equation', (req, res) => {
    console.log(req.body);
    let equationToAdd = req.body;
    res.sendStatus(200);
});

app.listen(5000, () => {
    console.log('app is running on port 5000');
    });