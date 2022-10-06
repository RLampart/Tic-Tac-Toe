document.addEventListener("DOMContentLoaded",function (){
   var board = document.getElementById("board").children;
   let clicks = 0;
   winner = document.getElementById("status");
   const victory = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
   console.log(victory[0]);
   for (x=0;x<9;x++){
       board[x].className = "square";
       board[x].addEventListener("mouseover", function(event){
        this.classList.add("hover")});
       board[x].addEventListener("mouseleave", function(event){
          this.classList.remove("hover")});
       board[x].addEventListener("click",function(event){

         if (this.innerHTML == ("X"))
         {
           this.innerHTML = ("O");
           this.classList.remove("X");
           this.classList.add("O");
         }
         else if (this.innerHTML == ("O"))
         {
           this.innerHTML = ("X");
           this.classList.remove("O");
           this.classList.add("X");
         }
         else {
           this.innerHTML = ("X");
           this.classList.add("X");
         }        
         clicks++;
         if (clicks>2){
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
         console.log(this.classList);

         //let square = document.getElementById("board").children[x];
         //square.classList.add("X");
       });
  }
  decision = document.getElementById("game");
  
})
