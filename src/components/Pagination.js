import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBanksByFilter } from "../redux/actions/banks";

const Pagination = ({
    city,
    filter,
    searchText,
    rowsPerPage,
    initialRow,
    totalBanks,
}) => {
    const dispatch = useDispatch();

    const handleRowsPerPage = async (e) => {
        await dispatch({
            type: "SET_ROWS_PER_PAGE",
            payload: +e.target.value,
        });
        await dispatch(
            fetchBanksByFilter({
                city,
                filter,
                searchText,
                rowsPerPage: +e.target.value,
            })
        );
    };

    const handelNext = async () => {
        await dispatch({
            type: "SET_INITIAL_ROW",
            payload: initialRow + rowsPerPage,
        });
        await dispatch(
            fetchBanksByFilter({
                city,
                filter,
                searchText,
                rowsPerPage,
                initialRow: initialRow + rowsPerPage,
            })
        );
    };

    const handlePrevious = async () => {
        await dispatch({
            type: "SET_INITIAL_ROW",
            payload: initialRow - rowsPerPage,
        });
        await dispatch(
            fetchBanksByFilter({
                city,
                filter,
                searchText,
                rowsPerPage,
                initialRow: initialRow - rowsPerPage,
            })
        );
    };

    return (
        <Row>
            <Col>
                <Row className="align-items-center">
                    <Col className="text-end" xs={9}>
                        Rows per page:{" "}
                    </Col>
                    <Col xs={3}>
                        <Form.Control
                            type="number"
                            onChange={handleRowsPerPage}
                        />
                    </Col>
                </Row>
            </Col>
            <Col className="pt-2 pb-2">
                <button onClick={handlePrevious} disabled={initialRow === 0}>
                    Previous
                </button>
                {initialRow + 1}-
                {initialRow + rowsPerPage > totalBanks
                    ? totalBanks
                    : initialRow + rowsPerPage}{" "}
                of {totalBanks}
                <button
                    onClick={handelNext}
                    disabled={initialRow + rowsPerPage >= totalBanks}
                >
                    Next
                </button>
            </Col>
        </Row>
    );
};

export default Pagination;
