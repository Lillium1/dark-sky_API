$(document).ready(function(){
	var locations = [
		{
			latitude: '-33.4488897', 
			longitude: '-70.6692655'
		}
	];

	var mostrarDia = function(data) {
		// Variables obligatorias
		var longitude = "";
		var latitude = "";
		var timezone = "";

		// Variables Opcionales hoy
		var lunes = "";
		var martes = ""
		var miercoless = "";
		var jueves = "";
		var viernes = "";
		var sabado = "";
		var domingo = "";

		// Variables Opcionales semana
		var tempMin = "";
		var tempMax = "";


		// Recorrido
		data.forEach(function(element) {
			latitude = element.latitude;
			longitude = element.longitude;
			timezone = element.timezone;

			// hoy
			estadoClima = element.currently.icon;
			temperature = element.currently.temperature;
			// semana
			tempMin = element.daily.data.temperatureMin;
			tempMax = element.daily.data.temperatureMax;

			wind = element.currently.windSpeed;
			humidity = element.currently.humidity;
			uv = element.currently.ozone;
			pressure = element.currently.pressure;


			
			// soleado
			if (estadoClima == "clear-day") {
				$("#icon-clima").append('<img src="assets/iconos/clear-night.png"')
			}
			// noche
			if (estadoClima == "clear-night") {
				$("#icon-clima").append('<img src="assets/iconos/clear-night.png"')
			}
			// nublado
			if (estadoClima == "cloudy") {
				$("#icon-clima").append('<img src="assets/iconos/cloudy.png"')
			} 
			// niebla
			if (estadoClima == "fog") {
				$("#icon-clima").append('<img src="assets/iconos/fog.png"')
			}
			// parcialmente nublado dia
			if (estadoClima == "partly-cloudy-day") {
				$("#icon-clima").append('<img src="assets/iconos/partly-cloudy-day.png"')
			}
			// parcialmente nublado noche
			if (estadoClima == "partly-cloudy-night") {
				$("#icon-clima").append('<img src="assets/iconos/partly-cloudy-night.png"')
			}
			// lluvia dia
			if (estadoClima == "rain-day") {
				$("#icon-clima").append('<img src="assets/iconos/rain-day.png"')
			}
			// lluvia noche
			if (estadoClima == "rain-night") {
				$("#icon-clima").append('<img src="assets/iconos/rain-night.png"')
			}
			// lluvia
			if (estadoClima == "rain") {
				$("#icon-clima").append('<img src="assets/iconos/rain.png"')
			}
			// agua nieve
			if (estadoClima == "sleet") {
				$("#icon-clima").append('<img src="assets/iconos/sleet.png"')
			}
			// nieve dia
			if (estadoClima == "snow-day") {
				$("#icon-clima").append('<img src="assets/iconos/snow-day.png"')
			}
			// nieve noche
			if (estadoClima == "snow-night") {
				$("#icon-clima").append('<img src="assets/iconos/snow-night.png"')
			}
			// nieve
			if (estadoClima == "snow") {
				$("#icon-clima").append('<img src="assets/iconos/snow.png"')
			}

			// Incorporar el resultado al html
			$("#grados").append('<h3 class="text-center">'+temperature+'</h3>');
			$("#col-hoy-result").append('<h5 class="text-right">'+wind+'</h5><h5 class="text-right">'+humidity+'</h5><h5 class="text-right">'+uv+'</h5><h5 class="text-right">'+pressure+'</h5>');
			$("#col-semana").append(estadoClima+'<h5>MONDAY</h5>'+ estadoClima + '<h5>TUESDAY</h5>'+ estadoClima+ '<h5>WEDNESDAY</h5>'+estadoClima+'<h5>THURSDAY</h5>'+estadoClima+'<h5>FRIDAY</h5>'+estadoClima+'<h5>SATURDAY</h5>'+estadoClima+'<h5>SUNDAY</h5>')
			$("#col-semana-result").append('<h5 class="text-right">'+temperatureMin+'º - '+temperatureMax+'º</h5>');


		});
	}

	var ajaxGif = function(gif) {
		$.ajax({
			url: 'https://api.darksky.net/forecast/9509ed01d76850dc7bde6dde6caad55f/-33.4489,-70.6693',
			type: 'GET',
			datatype: 'json',
			data: {
				api_key: '9509ed01d76850dc7bde6dde6caad55f'
			}
		})
		.done(function(response) {
			console.log(response);
			mostrarDia(response.data);
			mostrarSemana(response.data);
		})
		.fail(function() {
			console.log("error");
		});
	}

	$("#btn-dia").click(function(event) {
		$("#card-dia").hide();
		$("#card-semana").show();
	});

	$("#btn-semana").click(function() {
		$("#card-semana").hide();
		$("#card-dia").show();
	});

});

