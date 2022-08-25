export const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = '';

export const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
  redirect: "follow",
};