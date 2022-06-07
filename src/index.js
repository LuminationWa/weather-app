import "./style.css";
import callApi from "./modules/callApi";
import updateUI from "./modules/updateUI";

const searchBar = document.getElementById("search-bar");
const testButton = document.querySelector("button");
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

function checkUnits() {
  // Checks the radio values and if an option hasn't been selected it defaults to celsius
  if (celsiusInput.checked === true) {
    return "metric";
  } else if (fahrenheitInput.checked === true) {
    return "imperial";
  } else return "metric";
}

testButton.addEventListener("click", async function () {
  const currentWeather = await callApi.getWeather(
    searchBar.value,
    checkUnits()
  );
  updateUI.update(currentWeather);
});
