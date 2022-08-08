import axios from 'axios';

const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp (body) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, body);
    return promise;
}

function postLogIn (body) {
    const promise = axios.post(`${baseURL}/auth/login`, body);
    return promise;
}

function postCreateHabit (body, headers) {
    const promise = axios.post(`${baseURL}/habits`, body, { headers } );
    return promise;
}

function getHabits (headers) {
    const promise = axios.get(`${baseURL}/habits`, { headers });
    return promise;
}

function deleteHabit (habitId, headers) {
    const promise = axios.delete(`${baseURL}/habits/${habitId}`, { headers });
    return promise;
}

function getTodayHabitis (headers) {
    const promise = axios.get(`${baseURL}/habits/today`, { headers });
    return promise;
}

function postHabitCheck (habitId, headers) {
    const promise = axios.post(`${baseURL}/habits/${habitId}/check`, { headers} );
    return promise;
}

function postHabitUncheck (habitId, headers) {
    const promise = axios.post(`${baseURL}/habits/${habitId}/uncheck`, { headers });
    return promise;
}

function getHabitsHistory (headers) {
    const promise = axios.get(`${baseURL}/habits/history/daily`, { headers });
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