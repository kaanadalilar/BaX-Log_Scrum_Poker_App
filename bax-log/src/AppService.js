import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/baxlog/users";
const SESSION_API_BASE_URL = "http://localhost:8080/api/baxlog/sessions";

class AppService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    getSessions() {
        return axios.get(SESSION_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL + '/save', user);
    }

    createSession(session) {
        return axios.post(SESSION_API_BASE_URL + '/save', session);
    }

    checkJoinSession(sessionID) {
        return axios.get(SESSION_API_BASE_URL + '/joincheck/' + sessionID);
    }

    checkCreateSession(sessionID) {
        return axios.get(SESSION_API_BASE_URL + '/createcheck/' + sessionID);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    getSessionUsers(sessionID) {
        return axios.get(USER_API_BASE_URL + '/' + sessionID);
    } //BURAYI POKER PAGE İÇİN KULLAN

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    deleteSession(sessionId) {
        return axios.delete(SESSION_API_BASE_URL + '/' + sessionId);
    }

    updateUser(name, user) {
        return axios.put(USER_API_BASE_URL + '/' + name, user);
    }

    joinSession(sessionID) {
        return axios.put(SESSION_API_BASE_URL + '/join/' + sessionID);
    }

    checkUsernameExists(name) {
        return axios.get(USER_API_BASE_URL + '/usernamecheck/' + name);
    }

    lockSession(sessionID){
        return axios.put(SESSION_API_BASE_URL + '/lock/' + sessionID);
    }
}

export default new AppService()