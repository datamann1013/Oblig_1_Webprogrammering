let ticketArray = [];

function ticket(){
    let inputBoxMovie = document.getElementById("filmselector").value;
    let inputBoxAmount = document.getElementById("amount").value;
    let inputBoxFirst = document.getElementById("firstName").value;
    let inputBoxSur = document.getElementById("surName").value;
    let inputBoxPhone = document.getElementById("telephoneNR").value;
    let inputBoxEmail = document.getElementById("email").value;

    if (inputBoxMovie == 'Velg film her'){
        alert('Velg en film!')
        return;
    }
    let fullInput = {
        // Using : instead of = to make more compact / use less characters
        "filmselector" : inputBoxMovie,
        "amount" : inputBoxAmount,
        "firstName" : inputBoxFirst,
        "surName" : inputBoxSur,
        "telephoneNR" : inputBoxPhone,
        "email" :inputBoxEmail
    }
    ticketArray.push(fullInput);
    console.log(fullInput);
    document.getElementById('filmselector').value = 'Velg film her';
    document.getElementById('amount').value = ' ';
    document.getElementById('firstName').value = ' ';
    document.getElementById('surName').value = ' ';
    document.getElementById('telephoneNR').value = ' ';
    document.getElementById('email').value = ' ';
    out1();
}

function out1(){
    let ut = "<table><tr><td>Fornavn</td><td>Etternavn</td><td>Telefonnr</td>" +
        "<td>Epost</td><td>Film</td><td>Antall billetter</td></tr>";

    for (let a = 0; a < ticketArray.length; a++){
        ut = ut + "<tr><td>" + ticketArray[a].firstName + "</td><td>" + ticketArray[a].surName + "</td><td>" +
            ticketArray[a].telephoneNR + "</td><td>" + ticketArray[a].email + "</td><td>" +
            ticketArray[a].filmselector + "</td><td>" + ticketArray[a].amount + "</td></tr>";
    }
    document.getElementById('output').innerHTML = ut;
    console.log(ut);
}
function delTickets(){
    ticketArray = [];
    out1();
}