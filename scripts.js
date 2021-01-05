function CalculateTime(){
    let floor = document.getElementById('floor-number').value;
    let speed = document.getElementById('elevators-speed').value;
    let rides = document.getElementById('rides-per-day').value;
    let days = document.getElementById('number-of-days').value;
    let timeInElevator = floor*speed*rides*days
    alert("Время езды в лифте: " + timeInElevator + " секунд или " + timeInElevator/60 + " минут");
}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
