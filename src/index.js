import "./style.css";
import callApi from "./modules/callApi";
import updateUI from "./modules/updateUI";

const searchBar = document.getElementById("search-bar");
const testButton = document.querySelector("button");
testButton.addEventListener("click", async function () {
  const currentWeather = await callApi.getWeather(searchBar.value);
  updateUI.update(currentWeather);
});
