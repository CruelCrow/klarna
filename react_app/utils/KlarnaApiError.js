import {Consts} from './../constants';

export default class KlarnaApiError {
    constructor(response) {
        if (!response.data && !response.status) { //network error
            this._errorCode = Consts.KLARNA_API_ERRORS.ERR_NETWORK;
        } else {
            this._errorCode = response.status;
        }
        this._errorText = Consts.KLARNA_API_ERROR_MESSAGES[this._errorCode.toString()];
        if (!this._errorText) this._errorText = Consts.KLARNA_API_ERROR_MESSAGES[Consts.KLARNA_API_ERRORS.ERR_GENERIC.toString()];
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