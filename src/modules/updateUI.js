const updateUI = (() => {
  function update(currentWeather) {
    const humidityDisplay = document.getElementById("current-humidity");
    const temperatureDisplay = document.getElementById("current-temperature");
    const weatherDisplay = document.getElementById("current-weather");

    humidityDisplay.textContent = currentWeather.current.humidity;
    temperatureDisplay.textContent = currentWeather.current.temp;
    getGif(currentWeather.current.weather[0].description, weatherDisplay);
  }

  async function getGif(weather, weatherDisplay) {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=Vcg7HtLD5xp7mrYm0gi1Eks23ftlvXa6&s=${weather}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    weatherDisplay.src = weatherData.data.images.original.url;
  }

  return {
    update,
  };
})();

export default updateUI;
