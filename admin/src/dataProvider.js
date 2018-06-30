import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';

const API_URL = '../api';

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    switch (type) {
    case GET_LIST: {
        return { url: `${API_URL}/${resource}` };
    }
    case GET_ONE: {
      return { url: `${API_URL}/${resource}/${params.id}` };
    }
    case UPDATE:
      const token = localStorage.getItem('token');
      const body = { token, ...params.data };
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'PUT', body: JSON.stringify(body) },
        };
    case CREATE:
      const token = localStorage.getItem('token');
      const body = { token, ...params.data };
        return {
            url: `${API_URL}/${resource}`,
            options: { method: 'POST', body: JSON.stringify(body) },
        };
    case DELETE:
      const token = localStorage.getItem('token');
      const body = { token };
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'DELETE', body: JSON.stringify(body) },
        };
    default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
    case GET_LIST:
        return {
            data: json.map(x => x),
            total: json.length,
        };
    case CREATE:
        return { data: { ...params.data, id: json.id } };
    default:
        return { data: json };
    }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
