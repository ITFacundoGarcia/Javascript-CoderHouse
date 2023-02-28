var dataMensual;

//Solicitud API BCRA que recoje el dato de inflación mensual y la guarda para luego utitilizarla con el success de la siguiente solicitud.
$.ajax({
      url: 'https://api.estadisticasbcra.com/inflacion_mensual_oficial',
      type: 'GET',
      beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTg3MTY0OTYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJheGVAZ21haWwuY29tIn0.f_P3yHPBm9-m84yeBjZAiVM1flkXxuOXhXn1GPWU6ViVkdNQ3VdXSqFSTKFRDPjpk6QzAvqvnjkOr3hLQa9Z9w');
      },

      // si la conexion es exitosa, ejecutará la función "respuesta", definida allí mismo.
      success: function (respuesta) {
          let ultimoMes = respuesta.length-1
          console.log(respuesta[ultimoMes]);
          dataMensual = respuesta[ultimoMes].v;
      },

      error: function () {
          console.log("Error al leer la API del BCRA");
      }

  });

//Solicitud API BCRA que recoje el dato de inflación Anual y la muestra al usuario junto al dato de inflación mensual.
  $.ajax({
    url: 'https://api.estadisticasbcra.com/inflacion_interanual_oficial',
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTg3MTY0OTYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJheGVAZ21haWwuY29tIn0.f_P3yHPBm9-m84yeBjZAiVM1flkXxuOXhXn1GPWU6ViVkdNQ3VdXSqFSTKFRDPjpk6QzAvqvnjkOr3hLQa9Z9w');
    },

    // si la conexion es exitosa, ejecutará la función "respuesta", definida allí mismo.
    success: function (respuesta) {
        let ultimoAño = respuesta.length-1
        console.log(respuesta[ultimoAño]);
        $("#ultInflacion").append(`<p class="cuadroInf2">MENSUAL: ${dataMensual}% / ANUAL: ${respuesta[ultimoAño].v}%</p>`);
    },

    error: function () {
        console.log("Error al leer la API del BCRA");
        //En caso de fallar la consulta, se entregan los ultimos datos que se tuvo del BCRA ingresados de forma manual por el developer. (Se actualiza cada mes).
        $("#ultInflacion").append(`<p class="cuadroInf2">MENSUAL: 3.2% / ANUAL: 60.2%</p>`)
    }

});