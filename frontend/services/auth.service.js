import axios from 'axios';

const URL_LOGIN = "http://localhost:8080/api/auth/login";
const URL_REGISTER = "http://localhost:8080/api/auth/register";
export const loginPostRequest = async (loginData) => {

    let response;
    try {
        response = await axios.post(URL_LOGIN, loginData)
    } catch (error) {
        throw new Error(error.message);
    }

    return response;
}

export const registerPostRequest = async (registerData) => {

    let response;
    try {
        response = await axios.post(URL_REGISTER, registerData)
    } catch (error) {
        throw new Error(error.message);
    }

    return response;
}

