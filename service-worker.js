self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", (event) => {
  // Permite pasar todas las peticiones tal cual (sin caché offline)
});
