const elevatorTime = 3000;
var actualFloor = 0;

let btns = document.querySelectorAll("#btn");

function openingDoors() {

    let leftDoor  = document.querySelector(".left-door");
    let rightDoor = document.querySelector(".right-door");

    btns.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault();

            leftDoor.classList.add('left-door-animation');
            rightDoor.classList.add('right-door-animation');

            setTimeout(() => {
                leftDoor.classList.add('left-door');
                rightDoor.classList.add('right-door');
                leftDoor.classList.add('left-door-animation-opening');
                rightDoor.classList.add('right-door-animation-opening');
                setTimeout(() => {
                    leftDoor.classList.remove('left-door-animation');
                    rightDoor.classList.remove('right-door-animation');
                    setTimeout(() => {
                        leftDoor.classList.remove('left-door-animation-opening');
                        rightDoor.classList.remove('right-door-animation-opening');
                    }, 1000);
                }, 10);
            }, elevatorTime);

            
        });     
    });
}

let avaliableImages = [
    "https://media.discordapp.net/attachments/567559808085917705/826293432778489866/elevador1.jpg?width=601&height=450",
    "https://media.discordapp.net/attachments/567559808085917705/826295479880777728/elevador2.jpg?width=592&height=450"
]

let floorVisor = document.querySelector("#visor-number");
function goToFloor(floor){
    
    let avaliableFloors = [0,1,2,3];
    let diference = floor - actualFloor;

    let i = actualFloor;

    function subir(){
        setTimeout(function(){
            if(i != floor){
                i++;
                actualFloor = i;
                floorVisor.innerHTML = i;  
                console.log(i);
                subir();
            }
        }, 1000)
    }

    function descer(){
        setTimeout(function(){
            if(i != floor){
                i--;
                actualFloor = i;
                floorVisor.innerHTML = i;  
                if(i == 0) floorVisor.innerHTML = "T";
                console.log(i);
                descer();
            }
        }, 1000)
    }

    if(diference < 0){
        descer();
    }else{
        subir();
    } 

    openingDoors();
}
