let express = require('express');
let app = express();
const PORT = 5000;
app.use(express.static('server/public'));
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

let equationCollection = [];

//adding equation
app.post('/equation', (req, res) => {
    let numbersToRun = req.body;
    doMath(numbersToRun);
    equationCollection.push(numbersToRun);
    console.log(numbersToRun);
    res.sendStatus(200);
});

// getting equation
app.get('/equation', (req, res) => { 
    res.send(equationCollection);
});

function doMath( numbers ) {
    if (numbers.type == "add") {
        let sum = parseInt(numbers.firstNumber) + parseInt(numbers.secondNumber);
        numbers.total = sum;
    } else if (numbers.type === "subtract") {
         let difference = parseInt(numbers.firstNumber) - parseInt(numbers.secondNumber);
         numbers.total = difference;
    } else if (numbers.type === "multiply") {
         let product = parseInt(numbers.firstNumber) * parseInt(numbers.secondNumber);
         numbers.total = product;
    } else if(numbers.type === "divide") { 
        let quotient = parseInt(numbers.firstNumber) / parseInt(numbers.secondNumber);
         numbers.total = quotient;
    }
}

app.listen(5000, () => {
    console.log('app is running on port:', PORT);
});