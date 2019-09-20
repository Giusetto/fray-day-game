
// ************* START of initialization ***************************************

const mainElement = document.querySelector("main");
const mainStyle = getComputedStyle(mainElement);
const mainHeight = +mainStyle.height.slice(0, -2);
const mainWidth = +mainStyle.width.slice(0, -2);

const cubyElement = document.querySelector(".cuby");
const cubyStyle = getComputedStyle(cubyElement);
const cubyHeight = +cubyStyle.height.slice(0, -2);
const cubyWidth = +cubyStyle.width.slice(0, -2);

const startButton = document.querySelector("#gamestart");

let postop = +cubyStyle.top.slice(0, -2);
let posleft = +cubyStyle.left.slice(0, -2);
const startPostop=postop;
const startPosleft=posleft;
let strpos = "";
let speed = 50;
let players = new Array;

// ************* END of initialization ***************************************

// ************* START of program run ***************************************


startButton.addEventListener("click", game);  // Game is started by the event of clicking the a button.

let gameCount = 1;
let cubyCount = 0;
let pCount = 0;
let cubyWon = true;
let myTimeOut;
const playersElement = document.querySelector("#players");


for (i = 1; i < 3; i++) {
    players[i] = (prompt("name of the " + (i) + " player"));
}

playersElement.innerHTML = "<h1>" + players[1] + " VS " + players[2] + "</h1>";


// ************* END of program run ***************************************



// ************* START of functions() ***************************************




function game(e) {


    alert("Game start");
    cubyElement.style.top=startPostop+"px";
    cubyElement.style.left=startPosleft+"px";
    cubyElement.style.backgroundColor="rgb(5, 73, 5";
    document.addEventListener("keyup", move);
    cubyElement.addEventListener("click", touch);
    myTimeOut = setTimeout(function () { finish(true); }, 3000);

}


function finish(cubyWon) {
    clearTimeout(myTimeOut);
    document.removeEventListener("keyup", move);
    cubyElement.removeEventListener("click", touch);
    gameCount++;
    playersElement.innerHTML = "game count: " + gameCount;

    if (cubyWon) {
        cubyElement.style.backgroundColor = "green";
        alert("Cuby won");
        cubyCount++;
    } else {
        cubyElement.style.backgroundColor = "red";
        alert("Mouse won");
        pCount++;
    }

}



function touch(event) {
    finish(false);
}

function move(e) {
    console.log(e.keyCode);


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
