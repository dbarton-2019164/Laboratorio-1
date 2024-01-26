document.addEventListener('DOMContentLoaded', function () {
    var miReproductor = document.getElementById('miReproductor');
    var botonReproducir = document.getElementById('botonReproducir');
    var botonPausar = document.getElementById('botonPausar');
    var botonAdelantar = document.getElementById('botonAdelantar');

    botonReproducir.addEventListener('click', function () {
        miReproductor.style.display = 'block'; 
        miReproductor.play().then(function() {
     
        }).catch(function(error) {
      
            console.error('Error al iniciar la reproducción:', error);
        });
    });

    botonPausar.addEventListener('click', function () {
        miReproductor.pause();
    });

    botonAdelantar.addEventListener('click', function () {
        miReproductor.currentTime += 5; 
    });
    botonAtrasar.addEventListener('click', function () {
        miReproductor.currentTime -= 5; 
    });
});
