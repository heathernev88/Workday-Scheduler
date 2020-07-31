

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

let textArea = document.querySelector(".description");
let timeNow = moment().format('HH');
let timeSchedule = $(".hour").attr("data-time");
let saveBtn = document.querySelector(".saveBtn");

let input = localStorage.getItem("input");
textArea.textContent = input;

// show current date at top of document (day of week, month/date, year)
    const container = document.querySelector(".container")
    const currentDay= document.getElementById("currentDay")
    let today = moment().format('dddd, MMMM Do YYYY');
    document.getElementById("currentDay").innerHTML = today;
// end current date

    


// save user input to local storage 

function saveInput() {
    let storedData = localStorage.getItem("input")
    textArea.textContent = storedData;

}

// end local storage

// add even listener that when user clicks save image button input is saved into local storage

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    userInput = document.querySelector("description").value;
    localStorage.setItem("event", JSON.stringify(userInput));

    
    
    saveInput();
})
    



// add class of past, present, or future depending on what time it is

function setColor() {
    if (timeSchedule < timeNow ) {
        textArea.addClass("past")

    } else if (timeSchedule === timeNow) {
    textArea.addClass("present")

    } else {
    textArea.addClass("future")
   }
}