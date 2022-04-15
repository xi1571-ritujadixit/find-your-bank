const initialState = {
    initialRow: 0,
    rowsPerPage: 10,
    isLoading: false,
    favorites: [],
};

const banks = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_BANKS_BY_CITY": {
            const { city, banks } = payload;
            window.localStorage.setItem(city, JSON.stringify(banks));
            return {
                ...state,
                [city]: banks,
                banksByPage: banks.slice(0, 10),
                city,
                totalBanks: banks?.length,
            };
        }
        case "FETCH_BANKS_BY_FILTER": {
            return {
                ...state,
                banksByPage: payload.banksByPage,
                totalBanks: payload.totalBanks,
            };
        }
        case "SET_SEARCH_TEXT":
            return {
                ...state,
                searchText: payload,
            };
        case "SET_CITY":
            return {
                ...state,
                city: payload,
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: payload,
            };
        case "SET_ROWS_PER_PAGE":
            return {
                ...state,
                rowsPerPage: payload,
            };
        case "SET_INITIAL_ROW":
            return {
                ...state,
                initialRow: payload,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: payload,
            };
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, payload],
                banksByPage: state.banksByPage.map((bank) =>
                    bank.ifsc === payload.ifsc
                        ? { ...bank, isFavorite: true }
                        : bank
                ),
            };
        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favorites: [...payload],
            };
        default:
            return state;
    }
};

export default banks;
