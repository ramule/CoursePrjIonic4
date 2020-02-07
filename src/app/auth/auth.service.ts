import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // tslint:disable-next-line: variable-name
    _userIsAuthenticated = false;

    Login() {
        this._userIsAuthenticated = true;
    }

    Logout() {
        this._userIsAuthenticated = false;
    }

    get userIsAuthenticated() {
        return this._userIsAuthenticated;
    }
}
