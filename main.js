const API_KEY = "343deca551d403d8555a3c33d1c8f40d";
const getCurrentWeatherData = async() => {
    const city = "chandigarh";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    return response.json()
}


const loadCurrentForercast = ({ name, main: { temp, temp_max, temp_min }, weather: [{ description }] }) => {
    const currentForecastElement = document.querySelector("#current-forecast");
    currentForecastElement.querySelector(".city").textContent = name;
    currentForecastElement.querySelector(".temp").textContent = temp;
    currentForecastElement.querySelector(".description").textContent = description;
    currentForecastElement.querySelector(".min-max-temp").textContent = `H: ${temp_max} L:${temp_min}`;

}






document.addEventListener("DOMContentLoaded", async() => {
    const currentWeather = await getCurrentWeatherData();
    loadCurrentForercast(currentWeather)
})