import axios from '../utils/axios';

const authService = () => ({

    sigin(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', { email, password })
            .then((response) => {
                if (response.data.user) {
                    this.setUser(response.data.user);
                    resolve(response.data.user)
                } else {
                    this.setUser(null);
                    reject(response.data.error)
                }
            })
            .catch(error => reject(error))
        })
    },

    setUser(user) {
        localStorage.setItem("@conecta-dev:user", JSON.stringify(user));
    },

    getUser() {
        const user = localStorage.getItem("@conecta-dev:user");
        return user;
    },

    isAuthenticated() {
        return !!this.getUser();
    }
    
})


export default authService();