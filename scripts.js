let floor, speed, rides, days, randomNumber, timeInElevator

function CalculateTime() {
    floor = document.getElementById('floor-number').value;
    speed = document.getElementById('elevators-speed').value;
    rides = document.getElementById('rides-per-day').value;
    days = document.getElementById('time-interval').value;
    // randomNumber = Math.ceil(Math.random() * 20);
    randomNumber = Math.floor(Math.random() * 10) + 1; // не должно генерировать нули
    timeInElevator = floor * speed * rides * days * randomNumber;
    alert("Время езды в лифте: " + timeInElevator + " секунд или " + timeInElevator / 60 + " минут");
}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
