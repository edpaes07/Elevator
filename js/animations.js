const elevatorTime = 3000;
var actualFloor = 0;

let btns = document.querySelectorAll("#btn");

function openingDoors() {
    
    let leftDoor  = document.querySelector(".left-door");
    let rightDoor = document.querySelector(".right-door");

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

            
}

let avaliableImages = [
    "https://media.discordapp.net/attachments/567559808085917705/826293432778489866/elevador1.jpg?width=601&height=450",
    "https://media.discordapp.net/attachments/567559808085917705/826295479880777728/elevador2.jpg?width=592&height=450"
]

function setImageByFloor(){

    background = document.querySelector(".black-box");

    switch (actualFloor) {
        case 3:
            background.style.backgroundImage = `url(${avaliableImages[0]})`;
            break;
        case 2:
            background.style.backgroundImage = `url(${avaliableImages[1]})`;
            break;
        case 1:
            background.style.backgroundImage = `url(${avaliableImages[0]})`;
            break;
        case 0:
            background.style.backgroundImage = `url(${avaliableImages[1]})`;
            break;
    }

} 

function goToFloor(floor){
    
    let diference = floor - actualFloor;
    let floorVisor = document.querySelector("#visor-number");
    let i = actualFloor;

    function upELevator(){
        setTimeout(() => {
            if(i != floor){
                i++;
                actualFloor = i;
                floorVisor.innerHTML = i;  
                if(actualFloor == floor) openingDoors();
                setImageByFloor();
                upELevator();
            } 
        }, 1000)
    }

    function downElevator(){
        setTimeout(() => {
            if(i != floor){
                i--;
                actualFloor = i;
                floorVisor.innerHTML = i;  
                if(i == 0) floorVisor.innerHTML = "T";
                if(actualFloor == floor) openingDoors();
                setImageByFloor();
                downElevator();
            }
        }, 1000)
    }

    if(diference < 0){
        downElevator();
    }else{
        upELevator();
    } 
}
