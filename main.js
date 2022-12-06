

var positionMouseXInicial, positionMouseYInicial; //MODIFICAR

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    color = "black";
    widthLine = 1;

//CRIAR: 
   //p saber o tamanho da tela que está usando)
    var width = screen.width;
    newWidth =  screen.width - 70; 
    newHeight = screen.height - 300;

    if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    //desabilitar rolamento da tela p facilitar pintura->com fluidez
    document.body.style.overflow = "hidden";
	}

//NOVIDADES ACABAM AQUI


    canvas.addEventListener("touchstart", myTouchStart);

    function myTouchStart(e) 
    {
       
        console.log("myTouchStart");
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    }

//MODIFICAR PARA TOUCHMOVE
canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e){

    
   console.log("myTouchMove");
   positionToqueX = e.touches[0].clientX - canvas.offsetLeft;
   positionToqueY = e.touches[0].clientY - canvas.offsetTop;


//MANTER
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthLine;

    console.log("posiçãoXInicial="+positionMouseXInicial+" posiçãoYInicial="+positionMouseYInicial)
    ctx.moveTo(positionMouseXInicial,positionMouseYInicial)

    console.log("posiçãoXFinal="+positionToqueX+" posiçãoYFinal="+positionToqueY)
    ctx.lineTo(positionToqueX,positionToqueY)
    ctx.stroke();


   
 positionMouseXInicial=positionToqueX
 positionMouseYInicial=positionToqueY

}

