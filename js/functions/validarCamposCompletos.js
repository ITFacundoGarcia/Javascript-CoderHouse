import { CrearConsulta } from "../class/CrearConsulta.js";

export function validarCamposCompletos()
{
    let name = document.getElementById('name').value;
    let eft = document.getElementById('valorEft').value;
    let cta = document.getElementById('valorCuota').value;
    let cantCta = document.getElementById('cantCuotas').value;
    let inflacion = document.getElementById('inflacionMensual').value;
    let boton = document.getElementById('bttnCalcular');

    if (name != '' && eft != '' &&  cta != '' &&  cantCta != '' &&  inflacion != '')
    {
        boton.disabled = false;
        var ingresarConsulta = new CrearConsulta(name, eft, cta, cantCta, inflacion);
    }
    else
    {
        boton.disabled = true;
    }

    sessionStorage.setItem("user", JSON.stringify(ingresarConsulta))
}