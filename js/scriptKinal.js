document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("#image-slider img");
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
  }, 3000);
});

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


document.getElementById("leer-mas-btn").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
  
  window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  });
  