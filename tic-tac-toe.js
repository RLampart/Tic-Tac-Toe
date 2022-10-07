document.addEventListener("DOMContentLoaded",function (){
   var board = document.getElementById("board").children;
   let clicks = 0;
   game_state = [0,0,0,0,0,0,0,0,0];
   winner = document.getElementById("status");
   const victory = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
   console.log(victory[0]);
   const choose = function(x){
    return function(event){
    if (clicks%2 == 0 && game_state[x] == 0) {
      this.innerHTML = ("X");
      this.classList.add("X");
    }  
    else if ((clicks%2 != 0 && game_state[x] == 0) || clicks == 1)
    {
      this.innerHTML = ("O");
      this.classList.add("O");
    }
    game_state[x] = 1;
    clicks = 0
    for (let num of game_state)
         clicks += num;
    console.log(clicks);
    if (clicks>5){
     for (let match of victory){
       console.log(match);
       if (board[match[0]].innerHTML == ("X") && board[match[1]].innerHTML == ("X") 
       && board[match[2]].innerHTML == ("X")){
         winner.innerHTML = ("Congratulations! X is the Winner!");
         winner.className = "you-won";
         break;
   
       }
       else if (board[match[0]].innerHTML == ("O") && board[match[1]].innerHTML == ("O") 
       && board[match[2]].innerHTML == ("O")){
         winner.innerHTML = ("Congratulations! O is the Winner!");
         winner.className = "you-won";
         break;
   
       }
     }
    }
    
    if (game_state[x]>0){
      this.removeEventListener("click",choose(x));
    }
    console.log(game_state);

    //let square = document.getElementById("board").children[x];
    //square.classList.add("X");
  }}

   
   for (x=0;x<9;x++){
       board[x].className = "square";
       board[x].addEventListener("mouseover", function(event){
        this.classList.add("hover")});
       board[x].addEventListener("mouseleave", function(event){
          this.classList.remove("hover")});
       board[x].addEventListener("click",choose(x));
       console.log(game_state);

  }
  decision = document.getElementById("game");
  reset = document.getElementsByClassName("btn")[0];
  reset.addEventListener("click",function(event){
      location.reload();
  });
  
})
