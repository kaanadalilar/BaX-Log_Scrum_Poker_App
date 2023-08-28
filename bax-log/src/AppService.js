import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/baxlog/users";

class AppService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    updateUser(userId, user) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new AppService()