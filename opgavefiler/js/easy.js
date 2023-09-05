let myAnsverInput = document.getElementById('answerOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedback');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 1 og 2');
    let number = parseInt(prompt("Enter a number:"));

    switch (number) {
      case 1:
        console.log("You typed number one.");
        answerFeedbackOne.innerHTML = "Correct.";
        break;
      case 2:
        console.log("You typed number two.");
        answerFeedbackOne.innerHTML = "Correct.";
        break;
        case 3:
        console.log("You typed number three.");
        answerFeedbackOne.innerHTML = "Correct.";
        break;
        case 4:
        console.log("You typed number four.");
        answerFeedbackOne.innerHTML = "Correct.";
        break;
        case 5:
        console.log("You typed number five.");
        answerFeedbackOne.innerHTML = "Correct.";
        break;
      default:
        console.log("Invalid number.");
        answerFeedbackOne.innerHTML = "No no no. Invalid number.";
        break;
    }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/



// opgave 3 og 4
 myAnsverInput = document.getElementById('answerTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    let number = parseInt(prompt("Indtast et tal mellem 1 og 12:"));
let month;

switch (number) {
  case 1:
    month = "Januar";
    answerFeedbackTwo.innerHTML = "Ja, det er Januar";
    break;
  case 2:
    month = "Februar";
    answerFeedbackTwo.innerHTML = "Ja, det er Februar";
    break;
  case 3:
    month = "Marts";
    answerFeedbackTwo.innerHTML = "Ja, det er Marts";
    break;
  case 4:
    month = "April";
    answerFeedbackTwo.innerHTML = "Ja, det er April";
    break;
  case 5:
    month = "Maj";
    answerFeedbackTwo.innerHTML = "det var så Maj";
    break;
  case 6:
    month = "Juni";
    answerFeedbackTwo.innerHTML = "Ja, det er Juni";
    break;
  case 7:
    month = "Juli";
    answerFeedbackTwo.innerHTML = "Ja, det er Juli";
    break;
  case 8:
    month = "August";
    answerFeedbackTwo.innerHTML = "Ja, det er August";
    break;
  case 9:
    month = "September";
    answerFeedbackTwo.innerHTML = "Ja, det er September";
    break;
  case 10:
    month = "Oktober";
    answerFeedbackTwo.innerHTML = "Ja, det er Oktober";
    break;
  case 11:
    month = "November";
    answerFeedbackTwo.innerHTML = "Ja, det er November";
    break;
  case 12:
    month = "December";
    answerFeedbackTwo.innerHTML = "Ja, det er December";
    break;
  default:
    month = "Ugyldigt tal";
    answerFeedbackTwo.innerHTML = "Nejnejnej....";
    break;
}

console.log(`Tallet ${number} svarer til måneden ${month}.`);
});

/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnsverInput.value)
  
});


function workDays(day) {
    let feedbackElement = document.getElementById("answerFeedbackFive");
  
    switch (day.toLowerCase()) {
      case "mandag":
      case "tirsdag":
      case "onsdag":
      case "torsdag":
      case "fredag":
        feedbackElement.innerHTML = "Det er en hverdag!";
        break;
      case "lørdag":
      case "søndag":
        feedbackElement.innerHTML = "Mnhh... weekend!";
        break;
      default:
        feedbackElement.innerHTML = "det var en ugedag vi var ude efter...";
        break;
    }
  }



/* din view function her */


