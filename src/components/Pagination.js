import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBanksByFilter } from "../redux/actions/banks";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

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
                    <Col className="text-start" xs={3}>
                        Rows per page:{" "}
                    </Col>
                    <Col xs={2}>
                        <Form.Control
                            type="number"
                            onChange={handleRowsPerPage}
                        />
                    </Col>
                </Row>
            </Col>
            <Col className="pt-2 pb-2 text-end d-flex justify-content-end align-items-center">
                {initialRow !== 0 && (
                    <BsArrowLeftSquare
                        onClick={handlePrevious}
                        className="m-2"
                        role="button"
                    />
                )}
                {initialRow + 1} -{" "}
                {initialRow + rowsPerPage > totalBanks
                    ? totalBanks
                    : initialRow + rowsPerPage}{" "}
                of {totalBanks}
                {initialRow + rowsPerPage <= totalBanks && (
                    <BsArrowRightSquare
                        onClick={handelNext}
                        className="m-2"
                        role="button"
                    />
                )}
            </Col>
        </Row>
    );
};

export default Pagination;
