const Constants = {
    KLARNA_API_ERRORS: {
        ERR_NETWORK: -1,
        ERR_GENERIC: 0
    },

    KLARNA_API_ERROR_MESSAGES: {
        '-1': 'Network error',
        '0': 'Unknown error',
        '401': 'The API key is missing or invalid.',
        '404': 'The supplied searchRequestId does not correspond to any active search requests.',
        '405': 'Invalid input. You need to specify at least one search parameter.'
    },

    ACTIONS: {
        SEARCH: Symbol(),
        CLEAR_SEARCH: Symbol(),
        SEARCH_START_LOADING: Symbol(),
        SEARCH_END_LOADING: Symbol()
    },

    SEARCH_DELAY_TIME: 2000
};

export default Constants;
