import Auth0Lock from 'auth0-lock';
import jwt from 'jsonwebtoken';
import { browserHistory } from 'react-router';

class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    /*
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token',
      }
    });
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    */
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home react-router
    browserHistory.replace('/home');
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  login(username, password, callback) {
    // Call the show method to display the widget
    //this.lock.show();
    console.log(`username: ${username}`);
    console.log(`passwod: ${password}`);

    callback(jwt.sign({ username }, 'jew'));
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }
}

export default AuthService;
