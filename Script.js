const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-result").innerHTML = `
                    <p><strong>${data.name}, ${data.sys.country}</strong></p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById("weather-result").innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
