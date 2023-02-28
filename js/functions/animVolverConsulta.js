export function animVolverConsulta() {
    $("#pantallaSecundaria").slideUp(3000);
    setTimeout(3000);
    $("#pantallaPrincipal").slideDown(3000);
    $("#payList").hide(200)
    $("#simulacion").trigger("reset");;}