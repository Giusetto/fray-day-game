
const cuby = document.querySelector(".cuby");
let postop = 0;
let posleft = 0;
let strpos = "";
let speed = 50;
const mainElement = document.querySelector("main");
const mainStyle = getComputedStyle(mainElement);
const mainHeight = +mainStyle.height.slice(0,-2);
const mainWidth = +mainStyle.width.slice(0,-2);

const cubyElement = document.querySelector(".cuby");
const cubyStyle = getComputedStyle(cubyElement);
const cubyHeight = +cubyStyle.height.slice(0,-2);
const cubyWidth = +cubyStyle.width.slice(0,-2);


document.addEventListener("keyup", move);

cubyElement.addEventListener("click", touch);


function touch (event) {
    cubyElement.style.backgroundColor="red";
    document.removeEventListener("keyup", move);
    cubyElement.removeEventListener("click", touch);
    alert("You win");
    
}







function move(e) {
    //console.log(e.keyCode);

    
    switch (e.keyCode) {
        case 40: // down
            postop += speed;            
            if ((postop + cubyHeight) >= mainHeight ){
                postop = 0;
            }
            strpos = postop + "px";        
            cuby.style.top = strpos;
            break;
            case 38: // up
            postop -= speed;
            if (postop < 0 ){
                postop = mainHeight - cubyHeight;
            }
            strpos = postop + "px";
            cuby.style.top = strpos;
            break;
            case 39: // right
            posleft += speed;
            if ((posleft + cubyWidth) >= mainWidth ){
                posleft = 0;
            }
            strpos = posleft + "px";
            cuby.style.left = strpos;
            break;
            case 37: // left
            posleft -= speed;
            if (posleft < 0 ){
                posleft = mainWidth - cubyWidth;
            }
            strpos = posleft + "px";
            cuby.style.left = strpos;
            break;
            default:
            }
   
}
