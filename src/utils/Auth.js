const Auth = {
    isAuthenticated: localStorage.getItem('token'),
    getAuth() {
        return this.isAuthenticated;
    }
}

export default Auth;