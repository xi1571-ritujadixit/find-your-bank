import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BanksTable from "./BanksTable";
import SideNav from "./SideNav";

const Favorites = () => {
    const { favorites, isLoading } = useSelector((state) => state.banks);

    return (
        <div className="App">
            <Container fluid>
                <Row className="mt-3 mx-5">
                    <h2 className="text-start">Find Your Bank</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={3} className="pt-3 p-3">
                        <SideNav />
                    </Col>
                    <Col xs={8} className="mt-3 mb-3">
                        <Row className="text-start">
                            <h3>Favorites</h3>
                        </Row>
                        <BanksTable
                            banksByPage={favorites}
                            isLoading={isLoading}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Favorites;
