import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BanksTable from "./BanksTable";
import SideNav from "./SideNav";

const Favorites = () => {
    const { favorites, isLoading } = useSelector((state) => state.banks);

    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <SideNav />
                    </Col>
                    <Col xs={9}>
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
