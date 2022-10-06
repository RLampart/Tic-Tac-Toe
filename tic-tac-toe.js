document.addEventListener("DOMContentLoaded",function (){
   var board = document.getElementById("board").children;
   const board_s = [];
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
         console.log(this.classList);

         //let square = document.getElementById("board").children[x];
         //square.classList.add("X");
       });
  }
})
