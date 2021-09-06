require("dotenv").config();
const BASE_URL = process.env.VUE_APP_LOGIN_BASE;

const axios = require("axios").create({
    baseURL: BASE_URL,
    timeout: 60000,
});

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (err) => {
        const originalUrl = err.config;
        const {
            response: {status},
        } = err;

        if (status === 401) {
            console.log("Refreshing token")
            //Sets the cookies
            await refreshToken().catch(error => {
                console.log(error)
            })
            await axios(originalUrl).catch(error => {
                console.log(error)
            })
        }
    }
);

const signIn = (email, password) => {
    return axios.post("/login", {
        email: email,
        password: password,
        returnSecureToken: true,
    });
};

const getUsers = (size, query) => {
    axios.defaults.withCredentials = true;
    if (size !== null) {
        return axios.get("/user/list", {
            params: {
                size: parseInt(size),
                query: query,
            },
        });
    } else {
        return axios.get("/user/list");
    }
};

const refreshToken = () => {
    return axios.get("/refresh");
};

export default {
    signIn,
    getUsers,
    refreshToken,
};
