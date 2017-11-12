import axios from 'axios';
import KlarnaApiError from './KlarnaApiError';

export default class KlarnaApi {

    static _rootAPIUrl(path = '') {
        return `${API_SERVER_URL}${path}`;
    }

    static _get(url) {
        let req =
            axios.get(this._rootAPIUrl(url))
                .then((res)=> {
                    console.log('!!! get then res', res);
                    console.log(res);
                    return res;
                })
                .catch((res)=>{
                    console.log('!!! get catch res', res);
                    console.log(res);
                    throw new KlarnaApiError(res);
                });
        return req;
    }
    static _post(url, params) {
        let req =
            axios.post(this._rootAPIUrl(url), params)
                .then((res)=> {
                    return res;
                })
                .catch((res)=>{
                    throw new KlarnaApiError(res);
                });
        return req;
    }

    static search(name, age, phone, page) {
        return this._get(`/search?name=${!!name ? name : ''}&age=${!!age ? age : ''}&phone=${!!phone ? phone : ''}&page=${!!page ? page : '1'}`);
    }
}