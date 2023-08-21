import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PokerTable from "../components/poker_table.jpg";
import PokerBacklogTable from "../components/PokerBacklogTable";
import "./PokerPage.css";

function PokerPage() {

    return (
        <div className="main">
            <Header />
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <div className="title">
                                <h1 >Let's Play</h1>
                            </div>

                            <div className="moonsun">

                                <div className="moon">
                                    <PokerBacklogTable />

                                </div>

                                <div className="sun">

                                    <img
                                        src={PokerTable}
                                        position="relative"

                                    />

                                </div>



                            </div>



                        </div>

                    </div>
                </Row>
            </Container>
        </div >
    );
}

export default PokerPage;
