export const BASE_URL = "https://vche-movie.nomoreparties.co/api";

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResponseData(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getResponseData(res));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
};

// Получить даные пользователя
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => getResponseData(res));
};

// Изменить данные пользователя
export const setUserInfo = (userInfo) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email,
    }),
  }).then((res) => getResponseData(res));
};

// Сохранение поста фильма
export const addNewMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(data),
  }).then((res) => getResponseData(res));
};

// Удаление поста фильма
export const removeMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => getResponseData(res));
};

// Получить все посты фильмов
export const getAllMovies = () => {
  return fetch(`${BASE_URL}/movies/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => getResponseData(res));
};







