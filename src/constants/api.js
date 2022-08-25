export const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = 'c60129e8ac7788a478b880b619f7e4c1';

export const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
  redirect: "follow",
};