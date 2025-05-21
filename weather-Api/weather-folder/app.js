// const API_KEY = 'cf669afadb2677ab9f830759b2c765ee';
const API_KEY = '80619bcb21a4baff443c34cd1b3944c8';

const bgColors = [
  'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500',
  'bg-indigo-500', 'bg-pink-500', 'bg-purple-500', 'bg-orange-500',
  'bg-teal-500', 'bg-emerald-500', 'bg-rose-500', 'bg-cyan-500'
];

async function weatherData() {
  const cities = ['Dhaka', 'London', 'Bogura', 'Rajshahi', 'Toronto', 'Ottawa', 'Riyadh'];

  for (const city of cities) {
    await fetchAndDisplayWeather(city);
  }
}

async function searchCity() {
  const cityInput = document.getElementById("cityInput").value.trim();
  if (cityInput) {
    document.getElementById("result").innerHTML = ""; // clear previous
    await fetchAndDisplayWeather(cityInput);
  }
}

async function fetchAndDisplayWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.cod !== 200) throw new Error(data.message);

    const div = document.createElement("div");
    div.className = `${randomColor} text-white p-4 rounded shadow mb-4`;
    div.innerHTML = `
      <h2 class="text-xl font-bold">${data.name}</h2>
      <p>${data.weather[0].main} - ${data.weather[0].description}</p>
      <p class="text-2xl mt-2">${data.main.temp}°C</p>
      <p class="text-sm">Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("result").appendChild(div);
        console.log(data);

  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.className = `bg-red-500 text-white p-4 rounded shadow mb-4`;
    errorDiv.innerHTML = `<h2>${cityName}</h2><p>Error: ${error.message}</p>`;
    document.getElementById("result").appendChild(errorDiv);
  }
}
