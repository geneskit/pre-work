document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "500px";
    document.getElementById("box").style.width = "500px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.background = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.3";
    document.getElementById("box").style.filter  = 'alpha(opacity=90)'; 

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.background = "orange";

});

function mOver(obj) {

        obj.innerHTML = "AHHH! I could've dropped my croisSANT!"
  }
  
  function mOut(obj) {
      
    obj.innerHTML = "BOO!"
    
  }