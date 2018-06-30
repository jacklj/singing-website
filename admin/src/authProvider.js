import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const API_URL = '../api';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request(`${API_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  }
  if (type === AUTH_LOGOUT) {
    // ...
  }
  if (type === AUTH_ERROR) {
    // see https://marmelab.com/admin-on-rest/Authentication.html#catching-authentication-errors-on-the-api
    const status = params.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    const token = localStorage.getItem('token');
    const request = new Request(`${API_URL}/issignedin`, {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then(response => {
        const httpStatus = response.status;
        if (httpStatus !== 200) {
          console.warn(response.statusText);
          localStorage.removeItem('token');
          return Promise.reject();
        } else {
          return Promise.resolve();
        }
      })
      .catch(error => {
        console.warn(error);
        return Promise.reject();
      });
  }
  return Promise.resolve();
};
