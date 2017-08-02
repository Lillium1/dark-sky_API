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

		// Variables Opcionales
		var estadoClima = "";
		var temperature = ""
		var wind = "";
		var humidity = "";
		var uv = "";
		var pressure = "";


		// Recorrido
		data.forEach(function(element) {
			latitude = element.latitude;
			longitude = element.longitude;
			timezone = element.timezone;

			estadoClima = element.currently.icon;
			temperature = element.currently.temperature;
			wind = element.currently.windSpeed;
			humidity = element.currently.humidity;
			uv = element.currently.ozone;
			pressure = element.currently.pressure;

	if(a > b) {
		$("body").html("<p>A is larger than B</p>");
	}
			// noche
			if (estadoClima == "clear-night") {
				$("#icon-clima").append('<img src="assets/iconos/clear-night.png"')
			}
			// nublado
			if (estadoClima == "cloudy") {
				$("#icon-clima").append('<img src="assets/iconos/cloudy.png"')
			} 
			// nublado
			if (estadoClima == "fog") {
				$("#icon-clima").append('<img src="assets/iconos/fog.png"')
			}
			// nublado
			if (estadoClima == "partly-cloudy-day") {
				$("#icon-clima").append('<img src="assets/iconos/partly-cloudy-day.png"')
			}
			// nublado
			if (estadoClima == "partly-cloudy-night") {
				$("#icon-clima").append('<img src="assets/iconos/partly-cloudy-night.png"')
			}
			// nublado
			if (estadoClima == "rain-day") {
				$("#icon-clima").append('<img src="assets/iconos/rain-day.png"')
			}
			// nublado
			if (estadoClima == "rain-night") {
				$("#icon-clima").append('<img src="assets/iconos/rain-night.png"')
			}
			// nublado
			if (estadoClima == "rain") {
				$("#icon-clima").append('<img src="assets/iconos/rain.png"')
			}
			// nublado
			if (estadoClima == "sleet") {
				$("#icon-clima").append('<img src="assets/iconos/sleet.png"')
			}
			// nublado
			if (estadoClima == "snow-day") {
				$("#icon-clima").append('<img src="assets/iconos/snow-day.png"')
			}
			// nublado
			if (estadoClima == "snow-night") {
				$("#icon-clima").append('<img src="assets/iconos/snow-night.png"')
			}
			// nublado
			if (estadoClima == "snow") {
				$("#icon-clima").append('<img src="assets/iconos/snow.png"')
			}


			else {
				$("#icon-clima").append('<img src="assets/iconos/1498814600_sun_simplepng"')
			}

			$("#card-dia").append(armarTemplate(estadoClima,temperature,wind,humidity,uv,pressure));
		});
	}

	var armarTemplate = function(gif,url) {
		var t = '<div id="card-dia"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="icon-clima">hola</div></div></div></div>'
		return t;
	}

	var ajaxGif = function(gif) {
		$.ajax({
			url: 'https://api.giphy.com/v1/gifs/search',
			type: 'GET',
			datatype: 'json',
			data: {
				q: gif,
				api_key: 'dc6zaTOxFJmzC'
			}
		})
		.done(function(response) {
			console.log(response);
			dibujarGifs(response.data);
		})
		.fail(function() {
			console.log("error");
		});
	}

	$("#buscar-gif").click(function(event) {
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	});
});