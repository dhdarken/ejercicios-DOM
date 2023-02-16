
import  hamburgerMenu  from "./hamburguer.js";
import { digitalClock,Alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import netWorkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    Alarm("assets/alarma.mp3.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","mayo 11,2023 03:23:19","Buen Viaje");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=gT4IVJRjw4w" target ="blank" rel="noopener">Ver Video</a>` , `<iframe width="560" height="315" src="https://www.youtube.com/embed/gT4IVJRjw4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/mRyVK4pjMYNeyHZh7" target ="blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.940642658568!2d-75.59856081701065!3d6.232699928166354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429b96ec4b813%3A0xf82ff6e918b802f2!2sCancha%20Sint%C3%A9tica%20Chalaca%20Gol!5e0!3m2!1ses!2sco!4v1676407451150!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
})


d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
netWorkStatus();