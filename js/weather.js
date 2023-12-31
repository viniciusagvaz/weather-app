const APIkey = `YJZoshry97akAGCruOWwohJd04cgwcPE`;
const baseUrl = `https://dataservice.accuweather.com/`;

const getCityUrl = (cityName) =>
	`${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}&language=pt-br`;

const getWheatherUrl = (cityKey) =>
	`${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}&language=pt-br`;

const fetchData = async (url) => {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Não foi possivel obter os dados");
		}

		return response.json();
	} catch ({ name, message }) {
		alert(`${name}: ${message}`);
	}
};

const getCityData = (cityName) => fetchData(getCityUrl(cityName));
const getCityWeather = (cityKey) => fetchData(getWheatherUrl(cityKey));

