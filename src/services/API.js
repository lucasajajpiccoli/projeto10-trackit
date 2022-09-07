import axios from 'axios';

const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const config = {
    headers: {
        Authorization: ""
    }
};

function postSignUp (body) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, body);
    return promise;
}

function postLogIn (body) {
    const promise = axios.post(`${baseURL}/auth/login`, body);
    return promise;
}

function postCreateHabit (body, token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.post(`${baseURL}/habits`, body, config);
    return promise;
}

function getHabits (token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.get(`${baseURL}/habits`, config);
    return promise;
}

function deleteHabit (habitId, token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.delete(`${baseURL}/habits/${habitId}`, config);
    return promise;
}

function getTodayHabitis (token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.get(`${baseURL}/habits/today`, config);
    return promise;
}

function postHabitCheck (habitId, token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.post(`${baseURL}/habits/${habitId}/check`, config);
    return promise;
}

function postHabitUncheck (habitId, token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.post(`${baseURL}/habits/${habitId}/uncheck`, config);
    return promise;
}

function getHabitsHistory (token) {
    config.headers.Authorization = `Bearer ${token}`;
    const promise = axios.get(`${baseURL}/habits/history/daily`, config);
    return promise;
}

export { 
    postSignUp,
    postLogIn,
    postCreateHabit,
    getHabits,
    deleteHabit,
    getTodayHabitis,
    postHabitCheck,
    postHabitUncheck,
    getHabitsHistory
};