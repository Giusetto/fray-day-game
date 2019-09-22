
// ************* START of initialization ***************************************

const mainElement = document.querySelector("main");
const mainStyle = getComputedStyle(mainElement); // get actual css property (loaded from css file, otherwise is just empty because there is no style attribute directly at the html element)
const mainHeight = +mainStyle.height.slice(0, -2); // css properties are strings and they include their measurements like "10px" or "2rem" so they need to be trunkated and cast to numbers by +
const mainWidth = +mainStyle.width.slice(0, -2);

const cubyElement = document.querySelector(".cuby");
const cubyStyle = getComputedStyle(cubyElement);
const cubyHeight = +cubyStyle.height.slice(0, -2);
const cubyWidth = +cubyStyle.width.slice(0, -2);

const startButton = document.querySelector("#gamestart");

let postop = +cubyStyle.top.slice(0, -2);
let posleft = +cubyStyle.left.slice(0, -2);
const startPostop = postop;
const startPosleft = posleft;
let strpos = ""; // css property variable to cast the number back to string when setting css properties
let speed = 50;
let players = new Array;

// ************* END of initialization ***************************************

// ************* START of program run ***************************************

startButton.addEventListener("click", game);  // A game round is started by the event of clicking the a link button.

let gameCount = 0;
let cubyWonCount = 0;
let hunterWonCount = 0;
let cubyWon = true;
let myTimeOut;

// User input, 2 player names
for (i = 1; i < 3; i++) {
    players[i] = (prompt("name of the " + (i) + " player (first is runner, second is hunter)"));
}

const playersElement = document.querySelector("#players");
playersElement.innerHTML = "<h1>" + players[1] + " VS " + players[2] + "</h1>";

// We have an event-based program which means that the program run is controlled by the usage of the frontend elements (buttons, mouse, keyboard)
// => when the game starts by click on link, two functionalities need to be available: timout and click on cuby
// entry point is click on link:

function game(e) {
    alert("Game start");
    // set the runner cuby in start state
    cubyElement.style.top=startPostop+"px";
    cubyElement.style.left=startPosleft+"px";
    cubyElement.style.backgroundColor="rgb(5, 73, 5";
    // activate controls
    document.addEventListener("keyup", move); // Cuby can run now
    cubyElement.addEventListener("click", touch); // Cuby is now vulnerable
    // activate timeout
    myTimeOut = setTimeout(function () { finish(true); }, 3000); // Time of 1 round is running now
    // => from here, program continues at either [A] end of timeout or [B] Cuby got clicked
}

// ************* END of program run ***************************************

// ************* START of functions() ***************************************

// [A] end of timeout
function finish(cubyWon) {
    // clear state of round, disable controls
    clearTimeout(myTimeOut);
    document.removeEventListener("keyup", move);
    cubyElement.removeEventListener("click", touch);
    
    // show the result of game round
    gameCount++;
    playersElement.innerHTML = "game count: " + gameCount;
    if (cubyWon) {
        cubyElement.style.backgroundColor = "green";
        alert("Cuby won");
        cubyWonCount++;
    } else {
        cubyElement.style.backgroundColor = "red";
        alert("Mouse won");
        hunterWonCount++;
    }
}

// [B] Cuby got clicked
function touch(event) {
    finish(false);
}

// Ingame: Cuby can run now
function move(e) {
    console.log(e.keyCode);
    // 4 arrow keys are handled to put Cuby on a new position (defined by: top and left)
    switch (e.keyCode) {
        case 40: // down
            postop += speed;
            if ((postop + cubyHeight) >= mainHeight) {
                postop = 0;
            }
            strpos = postop + "px";
            cubyElement.style.top = strpos;
            break;
        case 38: // up
            postop -= speed;
            if (postop < 0) {
                postop = mainHeight - cubyHeight;
            }
            strpos = postop + "px";
            cubyElement.style.top = strpos;
            break;
        case 39: // right
            posleft += speed;
            if ((posleft + cubyWidth) >= mainWidth) {
                posleft = 0;
            }
            strpos = posleft + "px";
            cubyElement.style.left = strpos;
            break;
        case 37: // left
            posleft -= speed;
            if (posleft < 0) {
                posleft = mainWidth - cubyWidth;
            }
            strpos = posleft + "px";
            cubyElement.style.left = strpos;
            break;
        default:
    }
}

// ************* END of functions() ***************************************
