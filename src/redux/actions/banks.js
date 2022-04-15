import axios from "axios";

export const fetchAllBanks = () => {
    return async (dispatch) => {
        if (!window.localStorage.getItem("BANGALORE")) {
            await Promise.all([
                axios
                    .get(
                        `https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE`
                    )
                    .then((res) => {
                        dispatch({
                            type: "FETCH_BANKS_BY_CITY",
                            payload: { banks: res.data, city: "BANGALORE" },
                        });
                    }),
                axios
                    .get(
                        `https://vast-shore-74260.herokuapp.com/banks?city=HYDERADABAD`
                    )
                    .then((res) => {
                        dispatch({
                            type: "FETCH_BANKS_BY_CITY",
                            payload: { banks: res.data, city: "HYDERADABAD" },
                        });
                    }),
                axios
                    .get(
                        `https://vast-shore-74260.herokuapp.com/banks?city=PUNE`
                    )
                    .then((res) => {
                        dispatch({
                            type: "FETCH_BANKS_BY_CITY",
                            payload: { banks: res.data, city: "PUNE" },
                        });
                    }),
                axios
                    .get(
                        `https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`
                    )
                    .then((res) => {
                        dispatch({
                            type: "FETCH_BANKS_BY_CITY",
                            payload: { banks: res.data, city: "MUMBAI" },
                        });
                    }),
                axios
                    .get(
                        `https://vast-shore-74260.herokuapp.com/banks?city=GURGAON`
                    )
                    .then((res) => {
                        dispatch({
                            type: "FETCH_BANKS_BY_CITY",
                            payload: { banks: res.data, city: "GURGAON" },
                        });
                    }),
            ]);
        } else {
            dispatch({
                type: "FETCH_BANKS_BY_CITY",
                payload: {
                    banks: JSON.parse(window.localStorage.getItem("BANGALORE")),
                    city: "BANGALORE",
                },
            });
            dispatch({
                type: "FETCH_BANKS_BY_CITY",
                payload: {
                    banks: JSON.parse(
                        window.localStorage.getItem("HYDERADABAD")
                    ),
                    city: "HYDERADABAD",
                },
            });
            dispatch({
                type: "FETCH_BANKS_BY_CITY",
                payload: {
                    banks: JSON.parse(window.localStorage.getItem("PUNE")),
                    city: "PUNE",
                },
            });
            dispatch({
                type: "FETCH_BANKS_BY_CITY",
                payload: {
                    banks: JSON.parse(window.localStorage.getItem("MUMBAI")),
                    city: "MUMBAI",
                },
            });
            dispatch({
                type: "FETCH_BANKS_BY_CITY",
                payload: {
                    banks: JSON.parse(window.localStorage.getItem("GURGAON")),
                    city: "GURGAON",
                },
            });
        }
    };
};

export const fetchBanksByFilter = ({
    city,
    searchText = "",
    rowsPerPage = 10,
    filter,
    initialRow = 0,
}) => {
    return (dispatch, getState) => {
        const { banks } = getState();
        let filteredBanks;
        if (filter || searchText) {
            filteredBanks = banks[city].filter((bank) =>
                bank[filter].includes(searchText.toUpperCase())
            );
        } else {
            filteredBanks = banks[city];
        }
        return dispatch({
            type: "FETCH_BANKS_BY_FILTER",
            payload: {
                banksByPage: filteredBanks?.slice(
                    initialRow,
                    initialRow + rowsPerPage
                ),
                totalBanks: filteredBanks.length,
            },
        });
    };
};

export const toggleFavorites = (selectedBank) => {
    return (dispatch, getState) => {
        const { favorites } = getState().banks;
        if (favorites.find((bank) => bank.ifsc === selectedBank.ifsc)) {
            dispatch({
                type: "REMOVE_FROM_FAVORITES",
                payload: favorites.filter(
                    (bank) => bank.ifsc !== selectedBank.ifsc
                ),
            });
        } else {
            return dispatch({
                type: "ADD_TO_FAVORITES",
                payload: selectedBank,
            });
        }
    };
};
