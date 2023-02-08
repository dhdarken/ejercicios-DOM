


import hamburgerMenu from "./hamburguer.js";
import { digitalClock,Alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";

const d=document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    Alarm("assets/alarma.mp3.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","mayo 11,2023 03:23:19","Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
})


d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})