// nomer-etaja.addEventListener('input', e => span.innerText = e.target.value)
    
    function CalculateTime(){
        let floor = document.getElementById('floor-number').value;
        let speed = document.getElementById('elevators-speed').value;
        let rides = document.getElementById('rides-per-day').value;
        alert("Каждый месяц " + floor*speed*rides*30 + " секунд");
}