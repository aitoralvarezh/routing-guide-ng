export class AuthService {
    loggedIn = false;
    isAuthenticated() {
        const promise = new Promise(
            (resolve) => resolve(this.loggedIn)
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}