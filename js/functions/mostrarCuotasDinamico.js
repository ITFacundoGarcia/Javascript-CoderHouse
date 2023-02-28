export function mostrarCuotasDinamico ()
{
    let ingresarConsulta = JSON.parse(sessionStorage.getItem('user'));

    const TOTAL_CUOTAS_NOMINAL = ingresarConsulta.valorCuotaMes * ingresarConsulta.cantCuotas;
    let cuotaReal = 0;
    let cuotaNominal;
    const historialCuotas  = [];

        //Bloque que va restando cuota a cuota la sumatoria de inflación mensual acumulada (EJ: Mes 1 n1% inflación, mes 2 n1% + n2% inflación..)
    for (let i = 0; i != (ingresarConsulta.cantCuotas); i++)
        {
            cuotaReal  += ingresarConsulta.valorCuotaMes - (((ingresarConsulta.valorCuotaMes * ingresarConsulta.inflacionMensual) / 100))*(i+1);
            cuotaNominal = ingresarConsulta.valorCuotaMes * (i+1)
            historialCuotas.push(`Cuota N° ${i+1}<br>Pago nominal acumulado: ${cuotaNominal.toFixed(2)} pesos<br>Pago real acumulado a dinero de hoy: ${cuotaReal.toFixed(2)} pesos`)
        }

    var arrayCuotas = document.getElementById("payList")
    arrayCuotas.innerHTML = "";

    for (let i = 0; i < historialCuotas.length; i++)
        {
            let newElement = document.createElement("p");
            newElement.innerHTML = `${historialCuotas[i]}`;
            arrayCuotas.appendChild(newElement);
        }
}