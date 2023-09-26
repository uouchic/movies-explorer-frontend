export const BASE_URL = "https://api.nomoreparties.co/";

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => getResponseData(res));
};