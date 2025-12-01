//CODIGO RELOJ
function actualizarReloj() {
    const fechaHoy = new Date();
    let horas = String(fechaHoy.getHours()).padStart(2, '0');
    let minutos = String(fechaHoy.getMinutes()).padStart(2, '0');
    let segundos = String(fechaHoy.getSeconds()).padStart(2, '0');

    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;

    let dia = String(fechaHoy.getDate()).padStart(2, '0');
    let mes = String(fechaHoy.getMonth() + 1).padStart(2, '0');
    let año = fechaHoy.getFullYear()

    document.getElementById('fecha').textContent = `${dia}:${mes}:${año}`

    let mensaje = ""
    let minutosTotales = fechaHoy.getHours() * 60 + fechaHoy.getMinutes();
    if (minutosTotales >= 1 && minutosTotales <= 420) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana "
    }
    else if (minutosTotales >= 421 && minutosTotales <= 720) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código"
    }
    else if (minutosTotales >= 721 && minutosTotales <= 840) {
        mensaje = " Echa un rato más pero no olvides comer"
    }
    else if (minutosTotales >= 841 && minutosTotales <= 960) {
        mensaje = "Espero que hayas comido"
    }
    else if (minutosTotales >= 961 && minutosTotales <= 1080) {
        mensaje = "Buenas tardes, el último empujón"
    }
    else if (minutosTotales >= 1081 && minutosTotales <= 1320) {
        mensaje = "Esto ya son horas extras, ... piensa en parar pronto"
    }
    else { 
        mensaje = "Buenas noches, es hora de pensar en parar y descansar"
    }
    document.getElementById('mensaje').textContent=mensaje
    
}
setInterval(actualizarReloj,1000)
actualizarReloj()

