const apiKey = "638ff0e485874d0da53233030253011"
const ciudad = "Madrid"
const pais = "España"
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no`;
async function obtenerClima() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const {
            location, current, forecast
        } = data
        const ciudadPais = `${location.name},${location.country}`
        const estadoClima = current.condition.text;
        const iconoClima = current.condition.icon;
        const temperatura = current.temp_c;
        const precipitacion = current.precip_mm
        const humedad = current.humidity
        const viento = current.wind_kph
        const pronosticoHoras = forecast.forecastday[0].hour

        let html = `
<div class="current">

    <div class="weather-header">
        <h2>${ciudadPais}</h2>
        <p>${estadoClima}</p>
    </div>

    <div class="weather-body">

        <div class="weather-left">
            <img src="${iconoClima}" class="icono-clima">
        </div>

        <div class="weather-temp">
            <p class="temp-num">${temperatura}°C</p>
        </div>

        <div class="weather-extra">
            <p>Precipitaciones: ${precipitacion}mm</p>
            <p>Humedad: ${humedad}%</p>
            <p>Viento: ${viento} km/h</p>
        </div>

    </div>

    <div class="forecast">
`;

pronosticoHoras.forEach(i => {
    const hora = i.time.split(" ")[1];
    html += `
        <div class="hour-card">
            <p>${hora}</p>
            <img src="${i.condition.icon}">
            <p>${i.temp_c}°C</p>
        </div>
    `;
});

html += `
    </div>
</div>
`;
        
        document.getElementById('clima').innerHTML=html



    }
    catch (Error) {
        console.error(Error);
    }

}
obtenerClima()
if (localStorage.getItem("desdeIndex") === "true") {

    const btn = document.createElement("button");
    btn.id = "btn-regresar";
    btn.textContent = "⬅ Regresar";

    btn.onclick = () => {
        localStorage.removeItem("desdeIndex");
        window.location.href = "/project-break-Marco/index.html";
    };

    document.body.appendChild(btn);
}


(function () {
    const params = new URLSearchParams(location.search);
    const target = params.get('view') || 'climaSec';
    // Oculta todos y muestra el solicitado
    document.querySelectorAll('.view').forEach(el => el.classList.remove('show'));
    const el = document.getElementById(target);
    if (el) el.classList.add('show');
    if (!location.hash) {
        document.querySelectorAll('.view').forEach(el => {
            el.style.display = 'block';  

            
        });
    }
})();
document.getElementById('btn-regresar').addEventListener('click', () => {
    window.location.href = '/project-break-Marco/index.html';
});