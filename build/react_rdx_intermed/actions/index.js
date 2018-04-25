import axios from 'axios';

const API_KEY = 'c600bcfbb1ee8a4ec5efdd52b4a38e28';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // a Promise / asynchronus code

	return {
		type: FETCH_WEATHER,
		payload: request // payload here is a Promise - middleware (Redux Promise) deals with a Promise - middleware unwraps the Promise and then provides the resolved data from the Promise
	};
}
