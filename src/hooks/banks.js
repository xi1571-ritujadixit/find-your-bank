import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanks } from "../redux/actions/banks";

const useBanksState = () => {
    const dispatch = useDispatch();
    const {
        banksByPage,
        city,
        filter,
        isLoading,
        searchText,
        rowsPerPage,
        initialRow,
        totalBanks,
    } = useSelector((state) => state.banks);

    useEffect(() => {
        (async () => {
            dispatch({
                type: "SET_LOADING",
                payload: true,
            });
            await dispatch(fetchAllBanks());
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
        })();
    }, [dispatch]);

    return {
        banksByPage,
        city,
        filter,
        isLoading,
        searchText,
        rowsPerPage,
        initialRow,
        totalBanks,
    };
};

export default useBanksState;