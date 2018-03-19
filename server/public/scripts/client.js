$(document).ready(readyNow);

function readyNow() {
    $('#add').on('click', addNumbers)
    $('#subtract').on('click', subtractNumbers)
    $('#multiply').on('click', multiplyNumbers)
    $('#divide').on('click', divideNumbers)
    $('#clearHistory').on('click', clearHistory)
}
function divideNumbers() {
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let numbersToRun = {firstNumber: num1, secondNumber: num2, type: "divide"};
    $.ajax({
        type: 'post',
        data: numbersToRun,
        url: '/equation'
    }).done(function(response){
        // our response from a POST will just be '200
        console.log('Success');
        getAllEquations();
    }).fail(function(response){
        alert('Something went wrong...')
    })
} // end divideNumbers

function multiplyNumbers() {
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let numbersToRun = {firstNumber: num1, secondNumber: num2, type: "multiply"};
    $.ajax({
        type: 'post',
        data: numbersToRun,
        url: '/equation'
    }).done(function(response){
        // our response from a POST will just be '200
        console.log('Success');
        getAllEquations();
    }).fail(function(response){
        alert('Something went wrong...')
    })
} // end multiplyNumbers

function subtractNumbers() {
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let numbersToRun = {firstNumber: num1, secondNumber: num2, type: "subtract"};
    $.ajax({
        type: 'post',
        data: numbersToRun,
        url: '/equation'
    }).done(function(response){
        // our response from a POST will just be '200
        console.log('Success');
        getAllEquations();
    }).fail(function(response){
        alert('Something went wrong...')
    })
} // end subtractNumbers

function addNumbers() {
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let numbersToRun = {firstNumber: num1, secondNumber: num2, type: "add"};
    $.ajax({
        type: 'post',
        data: numbersToRun,
        url: '/equation'
    }).done(function(response){
        // our response from a POST will just be '200
        console.log('Success');
        getAllEquations();
    }).fail(function(response){
        alert('Something went wrong...')
    })
}// end addNumbers

function getAllEquations() {
    $.ajax({
        type: 'GET',
        url: '/equation',
    }).done(function(response){
        appendToDom(response);
        //the reponse is our gameCollection array
    }) 
}
function appendToDom(equationCollection) {
    $('.container').empty();
    for (const equation of equationCollection) {
        let tr = $('<tr></tr>')
        tr.append('<td>' + equation.firstNumber + '</td>')
        tr.append('<td>' + equation.secondNumber + '</td>')
        tr.append('<td>' + equation.type + '</td>')
        tr.append('<td>' + equation.total + '</td>')
        $('.container').append(tr);
    }
}
function clearHistory() {
    console.log('in clearHistory');
    $('.container').empty();
}

