let express = require('express');
let app = express();
const PORT = 5000;
app.use(express.static('server/public'));
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

let equationCollection = [];

//adding equation
app.post('/equation', (req, res) => {
    console.log(req.body);
    let equationToAdd = req.body;
    let num1 = equationToAdd.firstNumber;
    let num2 = equationToAdd.secondNumber;
    equationCollection.push(equationToAdd);
    console.log('collection', equationCollection);
    res.sendStatus(200);
});

// getting equation
app.get('/equation', (req, res) => { 
    res.send(equationCollection);
});

function doMath() {
    
}

app.listen(5000, () => {
    console.log('app is running on port 5000');
});