let floor, speed, rides, days, randomCheckbox, randomNumber, timeInElevator, maxFloor

function CalculateTime() {
    floor = +document.getElementById('floor-number').value;
    maxFloor = +document.getElementById('max-floor-number').value;
    speed = document.getElementById('elevator-speed').value;
    rides = document.getElementById('rides-per-day').value;
    days = document.getElementById('time-interval').value;
    randomCheckbox = document.getElementById('random-checkbox').checked;
    randomNumber = randomCheckbox ? Math.floor(Math.random() * 10) + 1 : 1;
    timeInElevator = floor * speed * rides * days * randomNumber;
    // result = timeInElevator;
    result = floor > maxFloor ? "Лжец и подлец" : "Время езды в лифте: " + timeInElevator + " секунд или " + timeInElevator / 60 + " минут";
    document.getElementById("time-result").innerHTML = result;
}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)

