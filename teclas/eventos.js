var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var estado= 0 ;

document.addEventListener("mousedown",presionarMouse);

document.addEventListener("mousemove",dibujarMouse);

document.addEventListener("mouseup",soltarMouse);

function dibujarMouse(evento)
{

    if (estado == 1){

      var xf =evento.clientX;
      var yf =evento.clientY;

      dibujarLinea("#2DD7DA",x,y,xf,yf,papel);
    }
    x =evento.clientX ;
    y = evento.clientY ;
    console.log(estado)
}

function presionarMouse(evento)
{
  estado= 1; //se preciona el click
}
function soltarMouse(evento)
{
  estado= 0; //se suelta el click
}












document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById('area_de_dibujo');
var papel =cuadrito.getContext("2d");
var x =150 ;
var y =150 ;

dibujarLinea("red",149,149,151,151,papel);





function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.lineWidth = 3;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue"
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
        dibujarLinea(colorcito,x,y,x, y -movimiento,papel);
        y = y -movimiento;
      break;
      case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x, y +movimiento,papel);
      y = y +movimiento;
      break;
      case teclas.LEFT:
      dibujarLinea(colorcito,x , y , x  -movimiento , y,papel);
      x = x-movimiento;
      break;
      case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x +movimiento, y,papel );
      x = x + movimiento;
      break;
    default:
    console.log(evento);
    console.log("Esa no sirve prro");
}
  }
