import {Consts} from './../constants';

export default class KlarnaApiError {
    constructor(response) {
        console.log('!!! response', response);
        console.log('!!! response.status', response.status);
        if (!response.data && !response.status) { //network error
            this._errorCode = Consts.KLARNA_API_ERRORS.ERR_NETWORK;
            this._errorText = 'Network error';
        } else {
            this._errorCode = response.status;
            this._errorText = response.statusText;
        }
    }

    get errorCode() {
        return this._errorCode;
    }

    get errorText() {
        return this._errorText;
    }

    toString() {
        return this.errorText;
    }
}