var posInicial=[0,0];
var posFinal=[0,0];

var filaInicial=0;
var colInicial=0;

var filaFinal=0;
var colFinal=0;

function casillaAleatoria() {
  while (true) {
    filaInicial= Math.floor((Math.random() *6) +1);
    filaFinal= Math.floor((Math.random() *6) +1);
    if (filaInicial != filaFinal) {
      break;
    }
  }
  while (true) {
    colInicial= Math.floor((Math.random() *6) +1);
    colFinal= Math.floor((Math.random() *6) +1);
    if (colInicial != colFinal) {
      break;
    }
  }

posInicial.splice(0,1, `${filaInicial}`);
posFinal.splice(0,1, `${filaFinal}`);

posInicial.splice(1,1, `${colInicial}`);
posFinal.splice(1,1, `${colFinal}`);

  console.log(`La fila inicial es ${posInicial[0]} y la columna inical es ${posInicial[1]}`);
  console.log(`La fila final es ${posFinal[0]} y la columna final es ${posFinal[1]}`);
}
casillaAleatoria();
