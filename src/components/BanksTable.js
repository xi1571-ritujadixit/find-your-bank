import React from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorites } from "../redux/actions/banks";
import Loader from "./Loader";

const BanksTable = ({ banksByPage, isLoading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRowClick = (ifsc) => {
        navigate(`/${ifsc}`);
    };

    const handleFav = (bank) => {
        dispatch(toggleFavorites(bank));
    };

    return isLoading ? (
        <Loader />
    ) : banksByPage?.length ? (
        <Row>
            <Table striped bordered hover size="xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Bank</th>
                        <th>IFSC</th>
                        <th>Branch</th>
                        <th>Bank ID</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {banksByPage?.map((bank) => {
                        return (
                            <tr key={bank.ifsc}>
                                <td>
                                    <button onClick={() => handleFav(bank)}>
                                        fav
                                    </button>
                                </td>
                                <td onClick={() => handleRowClick(bank.ifsc)}>
                                    {bank.bank_name}
                                </td>
                                <td onClick={() => handleRowClick(bank.ifsc)}>
                                    {bank.ifsc}
                                </td>
                                <td onClick={() => handleRowClick(bank.ifsc)}>
                                    {bank.branch}
                                </td>
                                <td onClick={() => handleRowClick(bank.ifsc)}>
                                    {bank.bank_id}
                                </td>
                                <td onClick={() => handleRowClick(bank.ifsc)}>
                                    {bank.address}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Row>
    ) : (
        <div>No Results Found!</div>
    );
};

export default BanksTable;
