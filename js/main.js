import { validarCamposCompletos } from "./functions/validarCamposCompletos.js";
import { animMostrarDatos } from "./functions/animMostrarDatos.js";
import { animVolverConsulta } from "./functions/animVolverConsulta.js";
import { animCuotas } from "./functions/animCuotas.js";
import { compararTarjetaVsEfectivo } from "./functions/compararTarjetaVsEfectivo.js";
import { mostrarCuotasDinamico } from "./functions/mostrarCuotasDinamico.js";

$("#habilitarBoton").mouseover(validarCamposCompletos)
$("#bttnCalcular").click(compararTarjetaVsEfectivo);
$("#bttnCalcular" ).click(animMostrarDatos);
$("#bttnMostrarCuotas").click(mostrarCuotasDinamico);
$("#bttnMostrarCuotas").click(animCuotas);
$("#bttnVolver").click(animVolverConsulta);
