import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import BanksTable from "./components/BanksTable";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import SideNav from "./components/SideNav";
import useBanksState from "./hooks/banks";

const App = () => {
    const {
        banksByPage,
        city,
        filter,
        isLoading,
        searchText,
        rowsPerPage,
        initialRow,
        totalBanks,
    } = useBanksState();

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
                        <Header
                            city={city}
                            filter={filter}
                            searchText={searchText}
                            rowsPerPage={rowsPerPage}
                            initialRow={initialRow}
                        />
                        <Pagination
                            city={city}
                            filter={filter}
                            searchText={searchText}
                            rowsPerPage={rowsPerPage}
                            initialRow={initialRow}
                            totalBanks={totalBanks}
                        />
                        <BanksTable
                            banksByPage={banksByPage}
                            isLoading={isLoading}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
