
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener('click', function () {
            if (this.getAttribute("date-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
})

function runGame(){

}
function checkAnswer(){

}
function calcAnswer(){

}
function incrementScore(){
    
}
function incrementWrongAnswer(){

}
function displayAddition(){

}
function displaySubtract(){

}
function displayMultiply(){

}
function displayDivide(){

}