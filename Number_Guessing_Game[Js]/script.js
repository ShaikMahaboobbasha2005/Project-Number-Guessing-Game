let maxNumber=parseInt(prompt("Enter the maximum number:"));
while(!maxNumber){
maxNumber = parseInt(prompt("Enter a valid number:"));
}
let targetNum = Math.floor(Math.random()*maxNumber+1);

let guess=prompt("Enter your first guess:");
let attempts = 1;
while(parseInt(guess)!== targetNum){
    if(guess === 'q') break;
    guess=parseInt(guess);
    if(guess > targetNum){
        guess=prompt("TOO HIGH : Guess Again")
        attempts++;
    }
    else if (guess < targetNum){
        guess=prompt("TOO LOW : Guess Again")
         attempts++;
    }
    else{
        guess=prompt("Invalid Guess!:Enter a valid Number or q to quit")
    }
}
if (guess ==='q'){
    console.log("YOU QUIT!")
    alert("YOU QUIT!")
}else{
console.log(`YOU GOT IT!.It took you ${attempts} attempts to win`)
alert(`YOU GOT IT!,it took you ${attempts} attempts to win`)
}