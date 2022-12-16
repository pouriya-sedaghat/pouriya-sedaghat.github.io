$(document).ready(function () {
    "use srtrict";
    $(".openModal").click(function () {
        $(".modal-template").addClass("showModal");
    });
    $(".img-template").click(function () {
        $(".modal-template").addClass("showModal");
    });
    $(".playGame").click(function () {
        $(".playSettings-template").fadeOut(300, function () {
            $(".playSettings-template").addClass("removePlaySetting");
        });
    });
    let attrChange = ["images/playing.png", "images/muted.png"];
    let conter = 0;
    $(".sound").click(function () {
        if (conter == 0) {
            conter++;
            $(".sound").attr("src", attrChange[conter]);
        }
        else {
            conter--;
            $(".sound").attr("src", attrChange[conter]);
        }
    });
    $(".cumstom-icon").click(function () {
        $(".modal-template").removeClass("showModal");
    });

    // snake map
    for (let i = 0; i < 255; i++) {
        $(".map-tamplate").append("<div class='pixel'></div>");
    }

    const map = $(".pixel");

    // snake body and moving

    // Horizental

    let i = 120;
    let j = 121;
    let k = 122;

    map[i].classList.add("lastHRElement");
    map[j].classList.add("middelHRElement");
    map[k].classList.add("firstHRElement");

    // Vertical

    let a = 0;
    let b = 17;
    let c = 34;

    map[a].classList.add("lastVDElement");
    map[b].classList.add("middelVDElement");
    map[c].classList.add("firstVDElement");

    // move

    let direction = "ArrowRight";

    direction = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                direction = "ArrowLeft";
                console.log(event.key);
                break;
            case "ArrowRight":
                direction = "ArrowRight";
                console.log(event.key);
                break;
            case "ArrowUp":
                direction = "ArrowUp";
                console.log(event.key);
                break;
            case "ArrowDown":
                direction = "ArrowDown";
                console.log(event.key);
                break;
            default:
                alert("Only Arrow Keys Are Allowed!");
                break;
        }
    };


    
    window.addEventListener("keyup", direction);

    setInterval(function () {

        // Horizental

        if (direction == "ArrowLeft") {

            map[i].classList.remove("lastHRElement");
            map[j].classList.remove("middelHRElement");
            map[k].classList.remove("firstHRElement");

            map[i].classList.remove("lastHLElement");
            map[j].classList.remove("middelHLElement");
            map[k].classList.remove("firstHLElement");

            i--;
            j--;
            k--;

            map[i].classList.add("lastHLElement");
            map[j].classList.add("middelHLElement");
            map[k].classList.add("firstHLElement");
        }

        else if (direction == "ArrowRight") {

            map[i].classList.remove("lastHLElement");
            map[j].classList.remove("middelHLElement");
            map[k].classList.remove("firstHLElement");

            map[i].classList.remove("lastHRElement");
            map[j].classList.remove("middelHRElement");
            map[k].classList.remove("firstHRElement");

            i++;
            j++;
            k++;

            map[i].classList.add("lastHRElement");
            map[j].classList.add("middelHRElement");
            map[k].classList.add("firstHRElement");
        }

        // vertical

        else if (direction == "ArrowUp") {

            map[a].classList.remove("lastVDElement");
            map[b].classList.remove("middelVDElement");
            map[c].classList.remove("firstVDElement");

            map[a].classList.remove("lastVUElement");
            map[b].classList.remove("middelVUElement");
            map[c].classList.remove("firstVUElement");

            a -= 17;
            b -= 17;
            c -= 17;

            map[a].classList.add("lastVUElement");
            map[b].classList.add("middelVUElement");
            map[c].classList.add("firstVUElement");
        }

        else {

            map[a].classList.remove("lastVUElement");
            map[b].classList.remove("middelVUElement");
            map[c].classList.remove("firstVUElement");
            
            map[a].classList.remove("lastVDElement");
            map[b].classList.remove("middelVDElement");
            map[c].classList.remove("firstVDElement");

            a += 17;
            b += 17;
            c += 17;

            map[a].classList.add("lastVDElement");
            map[b].classList.add("middelVDElement");
            map[c].classList.add("firstVDElement");
        }

    }, 300);

});












// var snakeBody, food, direction, allowedToMove, isPlaying;
// var map;
// var speed = 2;
// var play;

// function initializeVariables() {
//     snakeBody = [[0, 0]];
//     food = 0;
//     direction = "Right";
//     allowedToMove = false;
//     isPlaying = false;
// }

// // Creating the map and initializing variables
// function initializeGameState(mapElementId) {
//     map = document.getElementById(mapElementId);
//     initializeVariables();

//     // Generating the map pixels
//     for (var i = 0; i < 100; i++) {
//         var pixel = document.createElement("div");
//         pixel.setAttribute("class", "pixel");
//         map.appendChild(pixel);
//     }

//     // Generating the snake body and food
//     map.children[0].classList.add("snake-body");
//     generateFood();
// }

// function generateFood() {
//     // To prevent generating food over the snake
//     while (map.children[food].classList.contains("snake-body")) {
//         food = Math.floor(Math.random() * 100);
//     }
//     // Placing food on the map
//     map.children[food].classList.add("food");
// }

// function startGame() {
//     if (!isPlaying) {
//         allowedToMove = true;
//         play = setInterval(updatePosition, 1000 / speed);
//         document.getElementById("menu").style.display = "none";
//         document.getElementById("map").style.display = "";
//         isPlaying = true;
//     }
// }

// function pauseGame() {
//     if (isPlaying) {
//         allowedToMove = false;
//         clearInterval(play);
//         document.getElementById("menu-text").innerText =
//             "PAUSED\nPress ENTER to resume";
//         document.getElementById("menu").style.display = "";
//         document.getElementById("map").style.display = "none";
//         isPlaying = false;
//     }
// }

// function gameOver() {
//     clearInterval(play);
//     document.getElementById("menu-text").innerText =
//         "Game Over\nYour Score: " +
//         (snakeBody.length - 1) +
//         "\nPress ENTER to restart";
//     document.getElementById("menu").style.display = "";
//     document.getElementById("map").style.display = "none";
//     map.innerText = ""; // Clearing the map
//     initializeGameState(map.id); // Re-generating the map
// }

// function updatePosition() {
//     var newPosR, newPosC;
//     var head = snakeBody[snakeBody.length - 1];

//     switch (direction) {
//         case "Up":
//             newPosR = head[0] - 1;
//             newPosC = head[1];
//             break;
//         case "Down":
//             newPosR = head[0] + 1;
//             newPosC = head[1];
//             break;
//         case "Left":
//             newPosR = head[0];
//             newPosC = head[1] - 1;
//             break;
//         case "Right":
//             newPosR = head[0];
//             newPosC = head[1] + 1;
//             break;
//         default:
//             break;
//     }
//     // Checking if snake hit the wall
//     if (newPosR < 0 || newPosR > 9 || newPosC < 0 || newPosC > 9) {
//         gameOver();
//     } else {
//         snakeBody.push([newPosR, newPosC]);
//         updateScreen();
//         allowedToMove = true;
//     }
// }

// function updateScreen() {
//     var tailArray = snakeBody.shift();

//     var tail = parseInt(tailArray[0] + "" + tailArray[1]);

//     var headArray = snakeBody[snakeBody.length - 1];

//     var head = parseInt(headArray[0] + "" + headArray[1]);

//     // Checking if the snake bite its body
//     if (map.children[head].classList.contains("snake-body")) {
//         gameOver();
//     } else {
//         // Adds the new head block
//         map.children[head].classList.add("snake-body");

//         // Removes the tail block
//         map.children[tail].classList.remove("snake-body");

//         // If snake eats the food
//         if (head == food) {
//             map.children[food].classList.remove("food");
//             snakeBody.unshift(tailArray);
//             // Checking if the snake reached its max size
//             snakeBody.length == 100 && gameOver();
//             generateFood();
//         }
//     }
// }

// // CONTROLS

// document.onkeydown = keyPress;

// function keyPress(e) {
//     e.preventDefault();
//     e = e || window.event;

//     // Escape key is pressed
//     e.keyCode == 27 && pauseGame();

//     // Enter key is pressed
//     e.keyCode == 13 && startGame();
//     let up = 38;
//     let down = 40;
//     let left = 37;
//     let right = 39;

//     if (allowedToMove) {
//         allowedToMove = false;
//         switch (e.keyCode) {
//             case left:
//                 direction != "Right" && (direction = "Left");
//                 break;
//             case up:
//                 direction != "Down" && (direction = "Up");
//                 break;
//             case right:
//                 direction != "Left" && (direction = "Right");
//                 break;
//             case down:
//                 direction != "Up" && (direction = "Down");
//                 break;
//             default:
//                 allowedToMove = true;
//                 break;
//         }
//     }
// }

// // Initiates the game

// initializeGameState("map");