const callApi = (() => {
  async function getWeather(location, units) {
    // Taking the location first gets the coordinates and then passes it along the temperature units to the second function
    // Returns the full forecast data
    const coordData = await getCoordinates(location);
    const forecastData = await getForecast(coordData, units);
    return forecastData;
  }

  async function getCoordinates(location) {
    // Gets the coordinates from a location
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d6237b0ff90db62d4bfe937ee462dad7`,
      { mode: "cors" }
    );
    const coordData = await response.json();
    return coordData;
  }

  async function getForecast(coordData, units) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordData.coord.lat}&lon=${coordData.coord.lon}&exclude=minutely,alerts&units=${units}&appid=d6237b0ff90db62d4bfe937ee462dad7`,
      { mode: "cors" }
    );
    const forecastData = await response.json();
    return forecastData;
  }

  return {
    getWeather,
  };
})();

export default callApi;
