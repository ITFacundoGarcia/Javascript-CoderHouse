$.get("https://criptoya.com/api/dolar", function(cotizacion) {
    $("#dolOficial").append(cotizacion.oficial);
    $("#dolSolidario").append(cotizacion.solidario);
    $("#dolMEP").append(cotizacion.mep);
    $("#dolCCL").append(cotizacion.ccl);
    $("#dolBlue").append(cotizacion.blue);
  });