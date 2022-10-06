document.addEventListener("DOMContentLoaded",function (e){
   var board = document.getElementById("board").children;
   for (x=0;x<9;x++)
       board[x].setAttribute("class","square");
})
