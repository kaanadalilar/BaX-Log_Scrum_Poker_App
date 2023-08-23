import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PokerTable from "../components/poker_table.jpg";
import PokerBacklogTable from "../components/PokerBacklogTable";
import UnderPokerTable from "../components/under_poker_table.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./PokerPage.css";

function PokerPage() {

    return (
        <div className="main">
            <Header />
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <div className="moonsun">
                                <div className="moon">
                                    <PokerBacklogTable />
                                </div>
                                <div className="sun" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <div style={{ width: 1477, height: 715, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 7.69, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                                        <img style={{ width: 1477, height: 715, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 7.69 }} src={PokerTable} />

                                        <div style={{ width: 60.33, height: 57.48, left: 260, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 490, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 710, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 920, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1150, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1210, top: 329, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon> </div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1150, top: 517.79, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 920, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 710, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 490, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 260, top: 480, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 205, top: 329, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>

                                        <div style={{ width: 95.52, height: 25.26, left: 240, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Tuna</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 470, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Kaan</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 690, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Beyza</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 900, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Berke</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 1130, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Esin</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 1190, top: 294, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Hüseyin</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 969.31, top: 583.85, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Onur</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 969.31, top: 583.85, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Sude</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 698.83, top: 638.25, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Gökhan</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 477.62, top: 641.17, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Olcay</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 194.06, top: 586.77, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>İbrahim</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 185, top: 294, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Kübra</div>







                                        <div style={{ width: 43.50, height: 56.35, left: 345, top: 270, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 18.98, height: 18.88, left: 0, top: 0.43, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.08, height: 28.18, left: 18.42, top: 28.18, position: 'absolute' }}>
                                                <div style={{ width: 24.94, height: 28.04, left: 0.14, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 44.24, height: 55.37, left: 506.78, top: 218.58, position: 'absolute' }}>
                                            <div style={{ width: 43.95, height: 55.37, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.95, height: 55.37, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />

                                                <div style={{ width: 19.31, height: 18.55, left: 0, top: 0.42, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.51, height: 27.69, left: 18.73, top: 27.69, position: 'absolute' }}>
                                                <div style={{ width: 25.36, height: 27.55, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 44.24, height: 55.37, left: 715.92, top: 218.58, position: 'absolute' }}>
                                            <div style={{ width: 43.95, height: 55.37, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.95, height: 55.37, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19.31, height: 18.55, left: 0, top: 0.42, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.51, height: 27.69, left: 18.73, top: 27.69, position: 'absolute' }}>
                                                <div style={{ width: 25.36, height: 27.55, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 42.74, height: 57.31, left: 905, top: 378.39, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 42.46, height: 57.31, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 42.46, height: 57.31, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 18.65, height: 19.20, left: 0, top: 0.44, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 24.65, height: 28.66, left: 18.10, top: 28.66, position: 'absolute' }}>
                                                <div style={{ width: 24.51, height: 28.51, left: 0.14, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 44.15, height: 67.88, left: 385, top: 332.16, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.86, height: 67.88, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.86, height: 67.88, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19.27, height: 22.74, left: 0, top: 0.52, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.46, height: 33.94, left: 18.69, top: 33.94, position: 'absolute' }}>
                                                <div style={{ width: 25.31, height: 33.77, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 46.47, height: 56.35, left: 380, top: 400, position: 'absolute', transform: 'rotate(44.01deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 46.16, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 46.16, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 20.28, height: 18.88, left: 0, top: 0.43, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26.79, height: 28.18, left: 19.67, top: 28.18, position: 'absolute' }}>
                                                <div style={{ width: 26.64, height: 28.04, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 43.50, height: 56.35, left: 855, top: 437, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 18.98, height: 18.88, left: 0, top: 0.43, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.08, height: 28.18, left: 18.42, top: 28.18, position: 'absolute' }}>
                                                <div style={{ width: 24.94, height: 28.04, left: 0.14, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 43.50, height: 56.35, left: 900, top: 240, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.21, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 18.98, height: 18.88, left: 0, top: 0.43, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.08, height: 28.18, left: 18.42, top: 28.18, position: 'absolute' }}>
                                                <div style={{ width: 24.94, height: 28.04, left: 0.14, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div><div style={{ width: 44.24, height: 55.37, left: 715.92, top: 440, position: 'absolute' }}>
                                            <div style={{ width: 43.95, height: 57, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.95, height: 57, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19.31, height: 18.55, left: 0, top: 0.42, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.51, height: 27.69, left: 18.73, top: 27.69, position: 'absolute' }}>
                                                <div style={{ width: 25.36, height: 27.55, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 44, height: 57, left: 506.78, top: 440, position: 'absolute' }}>
                                            <div style={{ width: 43.71, height: 57, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.71, height: 57, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19.20, height: 19.10, left: 0, top: 0.43, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 25.37, height: 28.50, left: 18.63, top: 28.50, position: 'absolute' }}>
                                                <div style={{ width: 25.22, height: 28.36, left: 0.15, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>


                                        <div style={{ width: 171, height: 46, left: 150, top: 651, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Pick a card</div>
                                    </div>


                                    <img style={{ width: 1477, height: 150, left: 0, top: 710, position: 'absolute', borderTopLeftRadius: 7.69 }} src={UnderPokerTable} />

                                    <div style={{ width: 52, height: 70, left: 280, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>1</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 360, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>2</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 440, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>3</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 520, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>5</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 600, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>8</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 680, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>13</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 760, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>21</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 840, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>34</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 920, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>55</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 52, height: 70, left: 1000, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>89</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 52, height: 70, left: 1080, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>?</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div style={{ width: 932, height: 20, paddingLeft: 2, paddingRight: 15.39, paddingTop: 9.62, paddingBottom: 9.62, left: 320, top: 9, position: 'absolute', opacity: 0.70, background: '#667085', boxShadow: '0px 0.9615941643714905px 1.923188328742981px rgba(16, 24, 40, 0.05)', borderRadius: 7.69, overflow: 'hidden', border: '0.48px rgba(241.64, 241.64, 241.64, 0) solid', justifyContent: 'center', alignItems: 'center', gap: 7.69, display: 'inline-flex' }}>
                                        <div style={{ width: 19.23, height: 19.23, position: 'relative' }}>
                                            <div style={{ width: 11.22, height: 11.22, left: 4.01, top: 4.01, position: 'absolute', border: '0.80px white solid' }}></div>
                                        </div>
                                        <div style={{ width: 867, color: 'white', fontSize: 13.46, fontFamily: 'Inter', fontWeight: '500', lineHeight: 19.23, wordWrap: 'break-word' }}>TASK WILL APPEAR HERE </div>
                                        <div style={{ width: 1, height: 5, position: 'relative' }} />
                                    </div>
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