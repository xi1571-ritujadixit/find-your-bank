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
                <Row>
                    <Col xs={3}>
                        <SideNav />
                    </Col>
                    <Col xs={9} className="mt-3 mb-3">
                        <Header
                            city={city}
                            filter={filter}
                            searchText={searchText}
                            rowsPerPage={rowsPerPage}
                            initialRow={initialRow}
                        />
                        <BanksTable
                            banksByPage={banksByPage}
                            isLoading={isLoading}
                        />
                        <Pagination
                            city={city}
                            filter={filter}
                            searchText={searchText}
                            rowsPerPage={rowsPerPage}
                            initialRow={initialRow}
                            totalBanks={totalBanks}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
