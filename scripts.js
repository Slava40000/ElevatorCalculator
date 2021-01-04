// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
    
    function CalculateTime(){
        let floor = document.getElementById('floor-number').value;
        let speed = document.getElementById('elevators-speed').value;
        let rides = document.getElementById('rides-per-day').value;
        let days = document.getElementById('trips-in-x-days').value;
        alert("Столько времени я еду в лифте " + floor*speed*rides*days + " секунд");
}