let boxes = document.querySelectorAll(".box"); //  access the game box buttons
let resetBtn = document.querySelector(".reset"); // access reset button 
let newBtn = document.querySelector(".new"); // access new game button 
let msg = document.querySelector("#msg"); // access msg that appear after winning  
let msgContainer = document.querySelector(".msg-container"); // access msg conatener which include winning msg & new game button 

/* this is the turn - who play first and what prints in box  */
let turnO = true; // O will print first 

/* Winning posibilities positios array */
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

/* reset game button  */
const resetGame =()=>{
    turn0=true;
    enableBoxes(); // all boxes can clickable 
    msgContainer.classList.add("hide"); // wiiner msg will be hided here 
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O"; // O will printed on box 
            turnO=false; // now the second click will not for the O
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; // after clicking box once it will be disable
        checkWinner();
    })
});

/* this made for - after satisfying winning condition all boxes will be disabled  */
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
/* this made for - a */
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
/* this is wiining player msg  */
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation the winner is ${Winner}`;
    msgContainer.classList.remove("hide"); // here that msg appers 
    disableBoxes();
}

/* this function will check the winner  */
const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;

       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){ // not conatins null value 
        if(pos1Val===pos2Val && pos2Val===pos3Val) // all three box has same value
        {
           console.log("Winner", pos1Val);
           showWinner(pos1Val);
        }
       }
    }
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);