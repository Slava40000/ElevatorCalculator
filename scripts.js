let floor, speed, rides, days, randomCheckbox, randomNumber, secondsInElevator, maxFloor, floorCheck

function CalculateTime() {
    floor = +document.getElementById('floor-number').value;
    maxFloor = +document.getElementById('max-floor-number').value;
    speed = document.getElementById('elevator-speed').value;
    rides = document.getElementById('rides-per-day').value;
    days = document.getElementById('time-interval').value;
    randomCheckbox = document.getElementById('random-checkbox').checked;
    randomNumber = randomCheckbox ? Math.floor(Math.random() * maxFloor) + 1 : 1;
    secondsInElevator = floor * speed * rides * days * randomNumber;
    floorCheck = floor > maxFloor
    if (floorCheck) {
        result = "Лжец и подлец";
    }  else {
        // result = "Время езды в лифте: " + secondsInElevator + " секунд или " + (secondsInElevator / 60).toFixed(2) + " минут";
        let h = secondsInElevator  / 3600 ^ 0 ;
        let m = (secondsInElevator  - h * 3600) / 60 ^ 0 ;
        let s = secondsInElevator  - h * 3600 - m * 60 ;
        result = (h < 10 ? "0" + h : h) + " ч. " + (m < 10 ? "0" + m : m) + " мин. " + (s < 10 ? "0" + s : s)+ " сек.";
        
    } 
    document.getElementById("time-result").innerHTML = result;
}
window.onload = function() {
    document.getElementById('floor-number').addEventListener('input', CalculateTime);
    document.getElementById('max-floor-number').addEventListener('input', CalculateTime);
    document.getElementById('elevator-speed').addEventListener('input', CalculateTime);
    document.getElementById('rides-per-day').addEventListener('input', CalculateTime);
    document.getElementById('time-interval').addEventListener('change', CalculateTime);
}

function InsertTime(floorCheck, secondsInElevator) {

}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value) // example of clear code

