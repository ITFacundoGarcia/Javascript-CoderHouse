export class CrearConsulta 
{
    constructor(name, valorEft, valorCuota, cantCuotas, inflacion)
    {
        this.name = name;
        this.valorEft = valorEft;
        this.valorCuotaMes = valorCuota;
        this.cantCuotas = cantCuotas;
        this.inflacionMensual = inflacion;
    }
}