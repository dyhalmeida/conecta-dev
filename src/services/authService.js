import axios from '../utils/axios';

const authService = () => ({

    sigin(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', { email, password })
            .then((response) => {
                if (response.data.user) {
                    this.setToken('JWT');
                    resolve(response.data.user)
                } else {
                    this.setUser(null);
                    reject(response.data.error)
                }
            })
            .catch(error => reject(error))
        })
    },

    siginWithToken() {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/me')
            .then((response) => {
                if (response.data.user) {
                    resolve(response.data.user)
                } else {
                    this.setUser(null);
                    reject(response.data.error)
                }
            })
            .catch(error => reject(error))
        })
    },

    setToken(token) {
        localStorage.setItem("@conecta-dev:token", token);
    },

    getToken() {
        return localStorage.getItem("@conecta-dev:token");
    },

    isAuthenticated() {
        return !!this.getToken();
    }
    
})


export default authService();