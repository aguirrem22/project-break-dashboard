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

    document.getElementById('fecha').textContent = `${dia}/${mes}/${año}`

    let mensaje = ""
    let minutosTotales = fechaHoy.getHours() * 60 + fechaHoy.getMinutes();
    if (minutosTotales >= 1 && minutosTotales <= 420) {
        mensaje = "Es hora de descansar. Mañana te espera un dia de entreno "
    }
    else if (minutosTotales >= 421 && minutosTotales <= 720) {
        mensaje = "Buenos días, desayuna que ya casi empieza tu primer entrenamiento"
    }
    else if (minutosTotales >= 721 && minutosTotales <= 840) {
        mensaje = " Descansa un poco y come algo, sigue tu entreno de boxeo"
    }
    else if (minutosTotales >= 841 && minutosTotales <= 960) {
        mensaje = "Ánimo, ya casi terminas tu jornada de entreno diaria, pero sigue Jiujitsu"
    }
    else if (minutosTotales >= 961 && minutosTotales <= 1080) {
        mensaje = "Tu entreno de jiujitsu ha terminado, ahora toca relajarse"
    }
    else if (minutosTotales >= 1081 && minutosTotales <= 1320) {
        mensaje = "Haz un poco de MMA para acabar el día con buen sabor de boca"
    }
    else { 
        mensaje = "Tu entreno ha terminado guerrero , a descansar y recargar energías para mañana"
    }
    document.getElementById('mensaje').textContent=mensaje
    
}
setInterval(actualizarReloj,1000)
actualizarReloj()




document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("mostrarBackBtn") === "true") {
        const btnBack = document.createElement('button');
        btnBack.textContent = "Regresar al inicio";
        btnBack.id = "btnBack";
        btnBack.style.position = "fixed";
        btnBack.style.bottom = "20px";
        btnBack.style.right = "20px";

        btnBack.addEventListener('click', () => {
            localStorage.removeItem("mostrarBackBtn");
            window.location.href = '/index.html';
        });

        document.body.appendChild(btnBack);
    }

});


(function () {
    const params = new URLSearchParams(location.search);
    const target = params.get('view') || 'relojSec';
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
    window.location.href = '/index.html';
});