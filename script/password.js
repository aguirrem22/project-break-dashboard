function generarContraseña() {
    const longitud = parseInt(document.getElementById('longitud').value)
    if (longitud < 12 || longitud > 50) {
        document.getElementById('resultado').textContent = "elige un numero entre 12 y 50";
        return
    }
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const minusculas = "abcdefghijklmnopqrstuvwxyz"
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()-_=+"
    const diccionario = mayusculas + minusculas + numeros + simbolos;
    let contraseña = " "
    contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)]
    contraseña += minusculas[Math.floor(Math.random() * minusculas.length)]
    contraseña += numeros[Math.floor(Math.random() * numeros.length)]
    contraseña += simbolos[Math.floor(Math.random() * simbolos.length)]

    for (let i = contraseña.length; i < longitud; i++) {
        contraseña += diccionario[Math.floor(Math.random() * diccionario.length)]

    }
    document.getElementById('resultado').textContent = contraseña


}


(function () {
    const params = new URLSearchParams(location.search);
    const target = params.get('view') || 'passwordSec';
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