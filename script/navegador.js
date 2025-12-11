function navegar(ruta) {
    localStorage.setItem("mostrarBackBtn", "true");
    window.location.href = ruta;
}

document.getElementById('relojnav').addEventListener('click', () => {
    window.top.location.href = '../pages/reloj.html';


});
document.getElementById('passwordnav').addEventListener('click', () => {
    window.top.location.href = '../pages/password.html';
});
document.getElementById('urlnav').addEventListener('click', () => {

    window.top.location.href = '../pages/buscador.html';


});
document.getElementById('climanav').addEventListener('click', () => {
    window.top.location.href = '../pages/clima.html';
});
