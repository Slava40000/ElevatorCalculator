let floor, speed, rides, days, randomCheckbox, randomNumber, timeInElevator, maxFloor

function CalculateTime() {
    floor = document.getElementById('floor-number').value;
    maxFloor = document.getElementById('max-floor-number').value;
    speed = document.getElementById('elevators-speed').value;
    rides = document.getElementById('rides-per-day').value;
    days = document.getElementById('time-interval').value;
    randomCheckbox = document.getElementById('random-checkbox').checked;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    timeInElevator = floor * speed * rides * days * randomCheckbox ? randomNumber : 1;
    floor > maxFloor ? alert("Лжец и подлец" ) : alert("Время езды в лифте: " + timeInElevator + " секунд или " + timeInElevator / 60 + " минут");
}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
