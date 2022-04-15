import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SideNav from "./SideNav";

const Bank = () => {
    const params = useParams();
    const ifsc = params.ifsc;
    const { banksByPage } = useSelector((state) => state.banks);
    const bank = banksByPage?.find((bank) => bank.ifsc === ifsc);

    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <SideNav />
                    </Col>
                    <Col xs={9}>
                        <Row>{bank.bank_name}</Row>
                        <Row>{bank.ifsc}</Row>
                        <Row>{bank.branch}</Row>
                        <Row>{bank.address}</Row>
                        <Row>
                            {bank.city} {bank.district} {bank.state}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bank;
