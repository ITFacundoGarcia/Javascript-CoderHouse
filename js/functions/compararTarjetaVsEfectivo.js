export function compararTarjetaVsEfectivo ()
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
        historialCuotas.push(`Cuota N° ${i+1}, Pago nominal acumulado: ${cuotaNominal} pesos, Pago real acumulado a dinero de hoy: ${cuotaReal} pesos`)
    }

    if (cuotaReal < ingresarConsulta.valorEft)
        { let nuevoResultado = document.getElementById("result");
          nuevoResultado.innerHTML = `<p id=nombreUsuario>${ingresarConsulta.name}</p><p>Es conveniente pagar el producto en CUOTAS</p><p>El valor nominal a pagar total es: $${TOTAL_CUOTAS_NOMINAL}\n</p><p>El valor real a pagar a dinero del dia de hoy corresponde a: $${cuotaReal.toFixed(2)}</p>`
        }
        else
        {
            let nuevoResultado = document.getElementById("result");
            nuevoResultado.innerHTML = `<p id=nombreUsuario>>${ingresarConsulta.name}</p><p>Es conveniente pagar el producto en EFECTIVO\n</p><p>El valor en efectivo es: $${ingresarConsulta.valorEft}.</p><p>Abonando en cuotas hubieras pagado: $${cuotaReal.toFixed(2)} correspondientes al dia de hoy</p>`
        }
}