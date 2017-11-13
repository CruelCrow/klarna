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

export function clearSearch() {
    return {
        type: Consts.ACTIONS.CLEAR_SEARCH
    }
}

export function searchStartLoading(key = '') {
    return {
        type: Consts.ACTIONS.SEARCH_START_LOADING,
        payload: key
    }
}

export function searchEndLoading(key = '') {
    return {
        type: Consts.ACTIONS.SEARCH_END_LOADING,
        payload: key
    }
}
