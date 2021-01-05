function CalculateTime(){
    let floor = document.getElementById('floor-number').value;
    let speed = document.getElementById('elevators-speed').value;
    let rides = document.getElementById('rides-per-day').value;
    let days = document.getElementById('number-of-days').value;
    let timeInElevator = floor*speed*rides*days
    alert("Время езды в лифте: " + timeInElevator + " секунд или " + timeInElevator/60 + " минут");
}

// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
<<<<<<< HEAD
    
    function CalculateTime(){
        let floor = document.getElementById('floor-number').value;
        let speed = document.getElementById('elevators-speed').value;
        let rides = document.getElementById('rides-per-day').value;
        let days = document.getElementById('trips-in-x-days').value;
        let number =Math.ceil (Math.random () * 20); 
        alert("Столько времени я еду в лифте " + floor*speed*rides*days*number + " секунд");
        
}
=======
>>>>>>> 711aff66c90b4bc4dac7fe9e2844877ed5b770d6
