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
                <Row className="mt-3 mx-5">
                    <h2 className="text-start">Find Your Bank</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={3} className="pt-3 p-3">
                        <SideNav />
                    </Col>
                    <Col xs={8} className="mt-5 pt-3 mb-3">
                        <Row className="text-start">
                            <h4>{bank.bank_name}</h4>
                        </Row>
                        <Row className="text-start">
                            <h5>{bank.ifsc}</h5>
                        </Row>
                        <Row>
                            <Col xs={2} className="fw-bolder text-start">
                                Branch:
                            </Col>
                            <Col className="text-start">{bank.branch}</Col>
                        </Row>
                        <Row>
                            <Col xs={2} className="fw-bolder text-start">
                                Address:
                            </Col>
                            <Col className="text-start">{bank.address}</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={2}>
                                <div className="fw-bolder text-start">
                                    City:
                                </div>
                                <div className="text-start">{bank.city}</div>
                            </Col>
                            <Col xs={2}>
                                <div className="fw-bolder">District:</div>
                                <div>{bank.district}</div>
                            </Col>
                            <Col xs={2}>
                                <div className="fw-bolder">State:</div>
                                <div>{bank.state}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bank;
