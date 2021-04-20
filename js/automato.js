let estadosFinais =  {0:"0A", 1:"1A", 2:"2A", 3:"3A"}
let estadosTransicao= {0:"0F", 1:"1F", 2:"2F", 3:"3F"}

let estadoInicial = "0A";
let andarAtual = 0;


function moverElevador(andarSelecionado){
 let estadoAtual = estadoInicial;

    while(andarAtual != andarSelecionado){
        estadoAtual = estadosTransicao[andarAtual]

        if(andarSelecionado > andarAtual){
            andarAtual +=1;
        }else{
            andarAtual -=1;
        }

        console.log("Estado atual:" + estadoAtual)
    }
    goToFloor(andarAtual)
    console.log("Chegou até o destino, estado atual: "+ estadosFinais[andarAtual])

}