import hamburgerMenu from "./hamburguer.js";
import { digitalClock,Alarm } from "./reloj.js";
const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    Alarm("assets/alarma.mp3.mp3","#activar-alarma","#desactivar-alarma");
})
