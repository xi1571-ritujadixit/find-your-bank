import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBanksByFilter } from "../redux/actions/banks";

const Header = ({ city, filter, searchText, rowsPerPage, initialRow }) => {
    const dispatch = useDispatch();

    const handleCityChange = async (e) => {
        await dispatch({
            type: "SET_CITY",
            payload: e.target.value,
        });
        await dispatch(
            fetchBanksByFilter({
                city: e.target.value,
                filter,
                searchText,
                rowsPerPage,
                initialRow,
            })
        );
    };

    const handleFilterChange = async (e) => {
        await dispatch({
            type: "SET_FILTER",
            payload: e.target.value,
        });
        await dispatch(
            fetchBanksByFilter({
                city,
                filter: e.target.value,
                searchText,
                rowsPerPage,
                initialRow,
            })
        );
    };

    const handleSearch = async (e) => {
        dispatch({
            type: "SET_SEARCH_TEXT",
            payload: e.target.value,
        });
        await dispatch(
            fetchBanksByFilter({
                city,
                filter,
                searchText: e.target.value,
                rowsPerPage,
                initialRow,
            })
        );
    };

    return (
        <Row className="mb-3">
            <Col xs={6} className="text-start">
                All Banks
            </Col>
            <Col xs={2}>
                <Form.Select onChange={handleCityChange} defaultValue={city}>
                    <option>Select City</option>
                    <option value="BANGALORE">Bangalore</option>
                    <option value="GURGAON">Gurgaon</option>
                    <option value="HYDERABAD">Hyderabad</option>
                    <option value="PUNE">Pune</option>
                    <option value="MUMBAI">Mumbai</option>
                </Form.Select>
            </Col>
            <Col xs={2}>
                <Form.Select
                    onChange={handleFilterChange}
                    defaultValue={filter}
                >
                    <option>Select Filter</option>
                    <option value="ifsc">IFSC</option>
                    <option value="bank_name">Bank Name</option>
                    <option value="branch">Branch</option>
                </Form.Select>
            </Col>
            <Col xs={2}>
                <Form.Control
                    type="text"
                    placeholder="search"
                    onChange={handleSearch}
                />
            </Col>
        </Row>
    );
};

export default Header;
