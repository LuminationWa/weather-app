const updateUI = (() => {
  function update(currentWeather) {
    const humidityDisplay = document.getElementById("humidity");
    const temperatureDisplay = document.getElementById("temperature");
    const weatherDisplay = document.getElementById("weather");
    humidityDisplay.textContent = `Humidity: ${currentWeather.current.humidity}`;
    temperatureDisplay.textContent = `Temperature: ${currentWeather.current.temp}`;
    weatherDisplay.textContent = `Weather: ${currentWeather.current.weather[0].description}`;
  }

  return {
    update,
  };
})();

export default updateUI;
