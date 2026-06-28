// Esperamos a que todo el HTML cargue correctamente
document.addEventListener("DOMContentLoaded", function () {
  /* =======================================================
       1. LÓGICA DEL MENÚ HAMBURGUESA
       ======================================================= */
  const btnMenu = document.getElementById("btn-menu");
  const navMenu = document.getElementById("nav-menu");

  if (btnMenu && navMenu) {
    btnMenu.addEventListener("click", function () {
      navMenu.classList.toggle("mostrar-menu");
    });
  }

  /* =======================================================
       2. LÓGICA DEL BOTÓN FLOTANTE (SCROLL-UP)
       ======================================================= */
  const btnScrollUp = document.getElementById("btn-scroll-up");

  if (btnScrollUp) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        btnScrollUp.classList.add("mostrar");
      } else {
        // Si sube de nuevo, lo ocultamos
        btnScrollUp.classList.remove("mostrar");
      }
    });

    btnScrollUp.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
