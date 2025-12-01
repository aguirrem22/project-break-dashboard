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

        let html= `
        <div class="current">
         <div>
          <h2>${ciudadPais}</h2>
            <p>${estadoClima}</p>
            <img src=${iconoClima}>  <p>${temperatura}°C</p>
            <p>Precipitacion: ${precipitacion}mm</p>
            <p>Humedad: ${humedad}%</p>
            <p>Viento: ${viento}km/h</p>             
         </div>
        <div class="forecast"> `
         pronosticoHoras.forEach(i => {
            const hora=i.time.split(" ")[1]
            html+=  `<div class="hour-card"> <p>${hora}</p>
            <img src=${i.condition.icon}>
            <p>${i.temp_c}°C </p>
            </div> `
         })

        html+= `</div> 
         </div>  `      
        
        
        document.getElementById('clima').innerHTML=html



    }
    catch (Error) {
        console.error(Error);
    }

}
obtenerClima()