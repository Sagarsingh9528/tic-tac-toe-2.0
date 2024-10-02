let chance = "X";

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let win = document.getElementById("msg");
console.log(win);
function checkWin (){
    if(box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    } 
    
    if(box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }
    if(box7.innerText === "X" && box8.innerText === "X"  && box9.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }


    if(box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }
    if(box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }
    if(box3.innerText === "X" && box6.innerText === "X"  && box9.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }

    if(box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
    }
    if(box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X"){
        console.log("Congratulation X has won");
        win.innerText = "Congratulation X has won";
        reset();
   
    }
    

        if(box1.innerText === "0" && box2.innerText === "0" && box3.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
        if(box4.innerText === "0" && box5.innerText === "0" && box6.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
        if(box7.innerText === "0" && box8.innerText === "0"  && box9.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
    
    
        if(box1.innerText === "0" && box4.innerText === "0" && box7.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
        if(box2.innerText === "0" && box5.innerText === "0" && box8.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
        if(box3.innerText === "0" && box6.innerText === "0"  && box9.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }

        if(box1.innerText === "0" && box5.innerText === "0" && box9.innerText === "0"){
            console.log("X win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }
        if(box3.innerText === "0" && box5.innerText === "0" && box7.innerText === "0"){
            console.log("0 win");
            win.innerText = "Congratulation 0 has won";
            reset();
        }

        
}
function newgame(){
    win.innerText = "";
}

function reset (){
    box1.innerText = "";
    box2.innerText = "";
    box3.innerText = "";
    box4.innerText = "";
    box5.innerText = "";
    box6.innerText = "";
    box7.innerText = "";
    box8.innerText = "";
    box9.innerText = "";
    
}

function func1() {
    if(chance === "X"){
        box1.innerText = "X";
        chance = "0";
    }else{
        box1.innerText = "0";
        chance = "X";
    }
    checkWin();
    
}
function func2() {
    if(chance === "X"){
        box2.innerText = "X";
        chance = "0";
    }else{
        box2.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func3() {
    if(chance === "X"){
        box3.innerText = "X";
        chance = "0";
    }else{
        box3.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func4() {
    if(chance === "X"){
        box4.innerText = "X";
        chance = "0";
    }else{
        box4.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func5() {
    if(chance === "X"){
        box5.innerText = "X";
        chance = "0";
    }else{
        box5.innerText = "0";
        chance = "X";
    }
    checkWin();
}

function func6() {
    if(chance === "X"){
        box6.innerText = "X";
        chance = "0";
    }else{
        box6.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func7() {
    if(chance === "X"){
        box7.innerText = "X";
        chance = "0";
    }else{
        box7.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func8() {
    if(chance === "X"){
        box8.innerText = "X";
        chance = "0";
    }else{
        box8.innerText = "0";
        chance = "X";
    }
    checkWin();
}
function func9() {
    if(chance === "X"){
        box9.innerText = "X";
        chance = "0";
    }else{
        box9.innerText = "0";
        chance = "X";
    }
    checkWin();
}
 




