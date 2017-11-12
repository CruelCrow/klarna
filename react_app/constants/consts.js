const Constants = {
    KLARNA_API_ERRORS: {
        ERR_NETWORK: -1,
        ERR_GENERIC: 0,
        ERR_EMPTY_DATA: 1000
    },

    ACTIONS: {
        SEARCH: Symbol(),
        SEARCH_START_LOADING: Symbol(),
        SEARCH_END_LOADING: Symbol()
    },

    SEARCH_DELAY_TIME: 2000
};

export default Constants;
