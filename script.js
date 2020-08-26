let textArea = $(".description");
let timeNow = moment().hour();
let timeSchedule = $(".time-block").attr("data-hour");
let saveBtn = $(".saveBtn");
let storedInfo = [];

// show current date at top of document (day of week, month/date, year)
    const container = $(".container");
    const currentDay= $("#currentDay");
    let today = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(today);
// end current date

// saves user input to local storage

function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    
}

function retrieveLocalStorage(key) {
    storedInfo = JSON.parse(localStorage.getItem("info")) || [];
    
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    let userInput = $(this).siblings(".description").val().trim();
    let hour = $(this).parent().attr("id"); 
    
    let note = {
        time: hour,
        input: userInput
    };

    
    storedInfo.push(note);

    saveLocalStorage("info", storedInfo);
    

});

function populateTimeSlots() {
    let note;
    if (!storedInfo) {
        return;
    }

    for (let i=0; i < storedInfo.length; i++) {

        note = storedInfo[i];
        $("#" + note.time).children(".description").val(note.input);

    }

};

// end save user input to local storage

// adds class of past, present, or future depending on what time it is

function setColor() {

    let timeBlocks = $(".time-block");
    let dataHour;
    let timeBlock;
    let date = moment().format("YYYY-MM-DD");
    let currentTime = moment().format("HH");
    currentTime = moment(currentTime, "HH");
    let textArea;


    for (var i = 0; i < timeBlocks.length; i++) {
        timeBlock = $(timeBlocks[i]);
        textArea = timeBlock.children(".description");
        dataHour = timeBlock.data("hour");
        dataHour = moment(dataHour, "HH");
        
        
        if (currentTime.isBefore(dataHour)) {
            textArea.addClass("future")
        } else if (currentTime.isAfter(dataHour)) {
            textArea.addClass("past");
        } else {
            textArea.addClass("present");
        }
    }
};
// end class of past, present, or future

$(document).ready(function(){
    retrieveLocalStorage("info");
    populateTimeSlots();
    setColor();
}) ;