async function getWeather() {
  let city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  try {
    
    // Step 1: Convert City → Latitude & Longitude (Geocoding)
    let geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&country=IN`,
    );

    let geoData = await geoResponse.json();

    if (!geoData.results) {
      document.getElementById("result").innerHTML = "City not found!";
      return;
    }

    let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;

    // Step 2: Get Weather using Latitude & Longitude
    let weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );

    let weatherData = await weatherResponse.json();

    let temp = weatherData.current_weather.temperature;
    let wind = weatherData.current_weather.windspeed;

    document.getElementById("result").innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp} °C</p>
            <p>Wind Speed: ${wind} km/h</p>
        `;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching weather!";
  }
}
