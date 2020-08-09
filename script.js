let colors = [];
let pickedColor;
let numSquares =6;
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let mode = document.querySelectorAll(".mode");
let squares = document.querySelectorAll(".square");
let messageDisplay =document.querySelector("#message");
let colorDisplay = document.querySelector("#colorDisplay");

init();

function init(){
    modef();
    setsquares();
    resetf();
}

function modef(){
    for(let i =0; i< mode.length;i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numSquares =3;
            }
            else {
                numSquares =6;
            }
    
            resetf();
        });
    }
}

function setsquares(){
    for(let i=0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
            let clicked = this.style.backgroundColor;
            if(clicked===pickedColor){
                messageDisplay.textContent = "Correct!"
                reset.textContent = "Play Again?";
                changeColors(pickedColor);
                h1.style.backgroundColor = clicked;
    
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function changeColors(color){
    for(let i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for(let i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function resetf(){
    messageDisplay.textContent = "";
    reset.textContent = "New Colors"
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

reset.addEventListener("click", function(){
    resetf();
})


