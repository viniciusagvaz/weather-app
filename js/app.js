const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const countryNameContainer = document.querySelector('[data-js="country-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="city-card"]');
let timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

const showCard = () => {
	if (cityCard.classList.contains("d-none")) {
		cityCard.classList.remove("d-none");
	}
};

const showCityWeatherInfo = async (cityName) => {
	const [{ Key, LocalizedName, AdministrativeArea,
   Country}] = await getCityData(cityName);
	const [{  WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key);
	const timeIcon = `<img class="icon" src="./src/icons/${WeatherIcon}.svg">`;

	timeImg.src = IsDayTime ? "./src/day.svg" : "./src/night.svg";
	timeIconContainer.innerHTML = timeIcon;
	cityNameContainer.textContent = `${LocalizedName}, ${AdministrativeArea.ID}`;
   countryNameContainer.textContent = `${Country.LocalizedName}`
	cityWeatherContainer.textContent = WeatherText;
	cityTemperatureContainer.textContent = Temperature.Metric.Value.toFixed(0);
};

cityForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputValue = event.target.city.value;

	showCard();
	showCityWeatherInfo(inputValue);
	cityForm.reset();
});
