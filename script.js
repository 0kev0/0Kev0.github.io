function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

function linkDescarga() {
    window.open("https://www.mediafire.com/file/iwdyb7nw9fgsdgw/_Encuesta+CJNSP.pdf/file")
}

function navocult() {
  var side = document.getElementById('sidebar');
  if (side.style.display === 'none' || side.style.display === '') {
      side.style.display = 'block';
  } else {
      side.style.display = 'none';
  }
}

function ButtonCarrucelShow() {
  var side = document.getElementById('carrucelBotones');
  var txtpregunta = document.getElementById('TextPregunta');
  var txtBtn = document.getElementById('BotonPregunta');
  var Frase1 = document.getElementById('frase');
  var Frase2 = document.getElementById('frase2');


  if (side.style.display === 'none' || side.style.display === '') {
    
    side.style.display = 'block';
    Frase1.style.display = 'block';
    Frase2.style.display = 'block';
    
    txtpregunta.innerHTML  = '&#9733;Te tenemos cubierto...&#9733;'; // Cambia 'Nuevo texto' por el texto que desees mostrar
    txtBtn.innerHTML  = ':)'; // Cambia 'Nuevo texto' por el texto que desees mostrar
    
  } else {
    txtpregunta.innerHTML  = 'Que te parecio..???'; // Cambia 'Nuevo texto' por el texto que desees mostrar
    txtBtn.innerHTML  = ';)'; // Cambia 'Nuevo texto' por el texto que desees mostrar
  }

}



document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".inner_carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    
    let slideIndex = 0;
    const slides = carouselInner.querySelectorAll("img");
    const totalSlides = slides.length;
  
    // Función para mostrar el siguiente slide
    function showNextSlide() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      updateCarousel();
    }
  
    // Función para mostrar el slide anterior
    function showPrevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      updateCarousel();
    }
  
    // Actualizar el carrusel para mostrar el slide actual
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  
    // Eventos de clic para los botones de navegación
    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);
  
    // Función para avanzar automáticamente
    function autoAdvance() {
      showNextSlide();
    }
  
    // Intervalo para avanzar automáticamente cada 3 segundos
    setInterval(autoAdvance, 3000);
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".inner_carousel_md");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let slideIndex = 0;
  const slides = carouselInner.querySelectorAll("img");
  const totalSlides = slides.length;

  // Función para mostrar el siguiente slide
  function showNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    updateCarousel();
  }

  // Función para mostrar el slide anterior
  function showPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    updateCarousel();
  }

  // Actualizar el carrusel para mostrar el slide actual
  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  // Eventos de clic para los botones de navegación
  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Función para avanzar automáticamente
  function autoAdvance() {
    showNextSlide();
  }

  // Intervalo para avanzar automáticamente cada 3 segundos
  setInterval(autoAdvance, 6000);
});



document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".inner_carousel_btn");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let slideIndex = 0;
  const slides = carouselInner.querySelectorAll("button");
  const totalSlides = slides.length;

  // Función para mostrar el siguiente slide
  function showNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    updateCarousel();
  }

  // Función para mostrar el slide anterior
  function showPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    updateCarousel();
  }

  // Actualizar el carrusel para mostrar el slide actual
  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${slideIndex *3}%)`;
  }

  // Eventos de clic para los botones de navegación
  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Función para avanzar automáticamente
  function autoAdvance() {
    showNextSlide();
  }

  // Intervalo para avanzar automáticamente cada 3 segundos
  setInterval(autoAdvance, 3000);
});


document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".inner_carousel_btn_izq");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let slideIndex = 0;
  const slides = carouselInner.querySelectorAll("button");
  const totalSlides = slides.length;

  // Función para mostrar el siguiente slide
  function showNextSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    updateCarousel();
  }

  // Función para mostrar el slide anterior
  function showPrevSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    updateCarousel();
  }

  // Actualizar el carrusel para mostrar el slide actual
  function updateCarousel() {
    carouselInner.style.transform = `translateX(${slideIndex * 4}%)`;
  }

  // Eventos de clic para los botones de navegación
  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Función para avanzar automáticamente
  function autoAdvance() {
    showPrevSlide();
  }

  // Intervalo para avanzar automáticamente cada 3 segundos
  setInterval(autoAdvance, 3000);
});



document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".inner_carousel_btn_drch2");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let slideIndex = 0;
  const slides = carouselInner.querySelectorAll("button");
  const totalSlides = slides.length;

  // Función para mostrar el siguiente slide
  function showNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    updateCarousel();
  }

  // Función para mostrar el slide anterior
  function showPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    updateCarousel();
  }

  // Actualizar el carrusel para mostrar el slide actual
  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${slideIndex *10}%)`;
  }

  // Eventos de clic para los botones de navegación
  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Función para avanzar automáticamente
  function autoAdvance() {
    showNextSlide();
  }

  // Intervalo para avanzar automáticamente cada 3 segundos
  setInterval(autoAdvance, 3000);
});




  function copyCodeToClipboard() {
    var codeElement = document.getElementById("code");
    var code = codeElement.textContent;

    var tempInput = document.createElement("textarea");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var successAlert = document.getElementById("success-alert");
    successAlert.style.display = "block";
    setTimeout(function() {
      successAlert.style.display = "none";
  }, 2000); 
}

function toggleNav() {
  var nav = document.querySelectorAll('.nav');
  nav.classList.toggle('active');
}
function toggleNavbar(id) {
  var navbar = document.getElementById(id);
  
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
  
  navbar.style.fontSize = "12px";
}



