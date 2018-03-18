$(document).ready(readyNow);

function readyNow() {
    $('#add').on('click', runEquation)
    $('#subtract').on('click', runEquation)
    $('#multiply').on('click', runEquation)
    $('#divide').on('click', runEquation)
    getAllEquations();
}

function runEquation() {
    console.log('in runEquation');
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let equationToAdd = {firstNumber: num1, secondNumber: num2, type: "add"};
    $.ajax({
        type: 'post',
        data: equationToAdd,
        url: '/equation'
    }).done(function(response){
        // our response from a POST will just be '200
        console.log('Success');
    }).fail(function(response){
        alert('Something went wrong...')
    })
}//end runEquation

function getAllEquations() {
    $.ajax({
        type: 'GET',
        url: '/equation',
    }).done(function(response){
        //the reponse is our gameCollection array
    }) 
}
function appendToDom(equationCollection) {
    $('.container').empty();
    for (const equation of equationCollection) {
        console.log('equation', equation);
        let tr = $('<tr></tr>')
        tr.append('<td>' + equation.firstNumber + '</td>')
        tr.append('<td>' + equation.secondNumber + '</td>')
        $('.container').append(tr);
    }
}

