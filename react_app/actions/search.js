import {Consts} from './../constants';
import KlarnaApi from './../utils/KlarnaApi';
import KlarnaApiError from './../utils/KlarnaApiError';

export function search(name, age, phone, page) {
    let request = KlarnaApi.search(name, age, phone, page);

    return {
        type: Consts.ACTIONS.SEARCH,
        payload: request
    }
}

export function searchStartLoading() {
    return {
        type: Consts.ACTIONS.SEARCH_START_LOADING
    }
}

export function searchEndLoading() {
    return {
        type: Consts.ACTIONS.SEARCH_END_LOADING
    }
}
