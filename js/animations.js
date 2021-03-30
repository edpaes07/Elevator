const elevatorTime = 3000;

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

openingDoors();