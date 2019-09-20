
const cuby = document.querySelector(".cuby");
let postop = 10;
let posleft = 10;
//let strpos = "";
let speed = 50;

document.addEventListener("keyup", move);




function move(e) {
    console.log(e.keyCode);

    switch (e.keyCode) {
        case 40: // down
            postop += speed;
            console.log(postop);
            strpos = postop + "px";
            cuby.style.top = strpos;
            break;
        case 38: // up
            postop -= speed;
            strpos = postop + "px";
            cuby.style.top = strpos;
            break;
        case 39: // right
            posleft += speed;
            strpos = posleft + "px";
            cuby.style.left = strpos;
            break;
        case 37: // left
            posleft -= speed;
            strpos = posleft + "px";
            cuby.style.left = strpos;
            break;
        default:
    }
}
