function enviarFormulario() {
    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const destinatario = 'dbarton-2019164@kinal.edu.gt'

    const enlace = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(nombre + ':\n ' + mensaje)}`;
    window.location.href = enlace;

}

function cambiarSeccion(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

