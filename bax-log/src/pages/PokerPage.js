import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PokerTable from "../components/poker_table.jpg";
import UnderPokerTable from "../components/under_poker_table.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./PokerPage.css";
import CountdownTimer from '../hooks/CountdownTimer';
import AppService from '../AppService';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'status', headerName: <strong>{'Status'}</strong>, width: 90 },
    { field: 'header', headerName: <strong>{'Header'}</strong>, width: 90 },
    { field: 'description', headerName: <strong>{'Description'}</strong>, width: 210 },
];

const rows = [
    { id: 1, status: 'Active', header: '#234', description: "After game finishes, min, max, mode and average of the story points will appear on the screen." },
    { id: 2, status: 'Passive', header: '#235', description: "Task description will be here 2" },
    { id: 3, status: 'Passive', header: '#236', description: "Task description will be here 3" },
    { id: 4, status: 'Active', header: '#237', description: "Task description will be here" },
    { id: 5, status: 'Passive', header: '#238', description: "Task description will be here" },
    { id: 6, status: 'Passive', header: '#584', description: "Task description will be here" },
    { id: 7, status: 'Active', header: '#239', description: "Task description will be here" },
    { id: 8, status: 'Passive', header: '#240', description: "Task description will be here" },
    { id: 9, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 10, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 11, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 12, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 13, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 14, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 15, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 16, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 17, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 18, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 19, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 20, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 21, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 23, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 24, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 25, status: 'Active', header: '#234', description: "Task description will be here" },
    { id: 26, status: 'Passive', header: '#584', description: "Task description will be here" },
    { id: 27, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 28, status: 'Passive', header: '#234', description: "Task description will be here" },
    { id: 29, status: 'Passive', header: '#234', description: "Task description will be here" },
];


function PokerPage() {

    const [task, setTask] = React.useState('');
    const handleRowClick = (params) => {
        setTask(`${params.row.description}`);
    };

    const updateUserPickCard = (chName, chPickedCard, chIsPickedCard) => {
        let user = { name: chName, pickedCard: chPickedCard, isPickedCard: chIsPickedCard };
        console.log('user => ' + JSON.stringify(user));
        AppService.updateUser(1, user);
    }

    const THREE_MINS = 3 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeMins = NOW_IN_MS + THREE_MINS;

    const [div1Clicked, setDiv1Clicked] = useState(false);
    const [div2Clicked, setDiv2Clicked] = useState(false);
    const [div3Clicked, setDiv3Clicked] = useState(false);
    const [div5Clicked, setDiv5Clicked] = useState(false);
    const [div8Clicked, setDiv8Clicked] = useState(false);
    const [div13Clicked, setDiv13Clicked] = useState(false);
    const [div21Clicked, setDiv21Clicked] = useState(false);
    const [div34Clicked, setDiv34Clicked] = useState(false);
    const [div55Clicked, setDiv55Clicked] = useState(false);
    const [div89Clicked, setDiv89Clicked] = useState(false);
    const [divQMClicked, setDivQMClicked] = useState(false);

    const handleDivClick = (divId) => {
        setDiv1Clicked(false);
        setDiv2Clicked(false);
        setDiv3Clicked(false);
        setDiv5Clicked(false);
        setDiv8Clicked(false);
        setDiv13Clicked(false);
        setDiv21Clicked(false);
        setDiv34Clicked(false);
        setDiv55Clicked(false);
        setDiv89Clicked(false);
        setDivQMClicked(false);

        switch (divId) {
            case 1:
                setDiv1Clicked(true);
                updateUserPickCard("namefromState", "1", "true");
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 2:
                setDiv1Clicked(false);
                setDiv2Clicked(true);
                updateUserPickCard("namefromState", "2", "true");
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 3:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(true);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 5:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(true);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 8:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(true);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 13:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(true);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 21:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(true);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 34:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(true);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 55:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(true);
                setDiv89Clicked(false);
                setDivQMClicked(false);
                break;
            case 89:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(true);
                setDivQMClicked(false);
                break;
            case 144:
                setDiv1Clicked(false);
                setDiv2Clicked(false);
                setDiv3Clicked(false);
                setDiv5Clicked(false);
                setDiv8Clicked(false);
                setDiv13Clicked(false);
                setDiv21Clicked(false);
                setDiv34Clicked(false);
                setDiv55Clicked(false);
                setDiv89Clicked(false);
                setDivQMClicked(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <div className="moonsun">
                                <div className="moon">
                                    <div style={{ height: 860, width: '100%' }}>
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: { page: 0, pageSize: 5 },
                                                },
                                            }}
                                            pageSizeOptions={[5, 10, 15, 20, 25]}
                                            onRowClick={handleRowClick}
                                        />
                                    </div>
                                </div>
                                <div className="sun" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <div style={{ width: 1477, height: 715, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 7.69, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                                        <img style={{ width: 1477, height: 715, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 7.69 }} src={PokerTable} />
                                        <div style={{ left: 1270, top: 20, position: 'absolute', borderTopLeftRadius: 7.69, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                                            <CountdownTimer targetDate={dateTimeAfterThreeMins} />
                                        </div>
                                        <div style={{ width: 60.33, height: 57.48, left: 260, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 510, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 710, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 900, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1150, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1210, top: 330, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon> </div>
                                        <div style={{ width: 60.33, height: 57.48, left: 1150, top: 480, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 900, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 710, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 510, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 260, top: 480, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                        <div style={{ width: 60.33, height: 57.48, left: 205, top: 330, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>

                                        <div style={{ width: 95.52, height: 25.26, left: 240, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Tuna</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 490, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Kaan</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 690, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Beyza</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 880, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Berke</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 1130, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Esin</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 1190, top: 295, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Hüseyin</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 1130, top: 550, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Onur</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 880, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Sude</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 690, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Gökhan</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 490, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Olcay</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 240, top: 550, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>İbrahim</div>
                                        <div style={{ width: 95.52, height: 25.26, left: 185, top: 295, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Kübra</div>

                                        <div style={{ width: 43.50, height: 56.35, left: 390, top: 280, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 520, top: 220, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 715, top: 220, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>

                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 905, top: 220, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 1045, top: 240, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>

                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 1050, top: 375, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: -1, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 1005, top: 435, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 905, top: 440, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 715, top: 440, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 520, top: 440, position: 'absolute' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 425, top: 390, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 18.88, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>

                                        <div style={{ width: 43.50, height: 56.35, left: 420, top: 330, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                <div style={{ width: 19, height: 19, left: 0, top: -1, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                            </div>
                                            <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 171, height: 46, left: 150, top: 651, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Pick a card</div>
                                    </div>

                                    <img style={{ width: 1477, height: 150, left: 0, top: 710, position: 'absolute', borderTopLeftRadius: 7.69 }} src={UnderPokerTable} />

                                    <div onClick={() => handleDivClick(1)} style={{ width: 52, height: 70, left: 180, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div1Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>1</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(2)} style={{ width: 52, height: 70, left: 260, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div2Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>2</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(3)} style={{ width: 52, height: 70, left: 340, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div3Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>3</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(5)} style={{ width: 52, height: 70, left: 420, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div5Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>5</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(8)} style={{ width: 52, height: 70, left: 500, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div8Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>8</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(13)} style={{ width: 52, height: 70, left: 580, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div13Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>13</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(21)} style={{ width: 52, height: 70, left: 660, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div21Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>21</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(34)} style={{ width: 52, height: 70, left: 740, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div34Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>34</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(55)} style={{ width: 52, height: 70, left: 820, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div55Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>55</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(89)} style={{ width: 52, height: 70, left: 900, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: div89Clicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>89</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div onClick={() => handleDivClick(144)} style={{ width: 52, height: 70, left: 980, top: 710, position: 'absolute' }}>
                                        <div style={{ width: 51.65, height: 70, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ backgroundColor: divQMClicked ? 'rgba(255, 0, 0, 0.8)' : "white", width: 51.65, height: 70, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                            <div style={{ width: 22.69, height: 23.45, left: 0, top: 0.53, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>?</div>
                                        </div>
                                        <div style={{ width: 29.98, height: 35, left: 22.02, top: 35, position: 'absolute' }}>
                                            <div style={{ width: 29.81, height: 34.83, left: 0.17, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            width: 932, height: 20, paddingLeft: 2, paddingRight: 15.39, paddingTop: 9.62, paddingBottom: 9.62, left: 40, top: 9, position: 'absolute', opacity: 0.70, background: '#667085',
                                            boxShadow: '0px 0.9615941643714905px 1.923188328742981px rgba(16, 24, 40, 0.05)', borderRadius: 7.69, overflow: 'hidden', border: '0.48px rgba(241.64, 241.64, 241.64, 0) solid', alignItems: 'center', gap: 7.69, display: 'inline-flex'
                                        }}>
                                        <div style={{ width: 19.23, height: 19.23, position: 'relative' }}>
                                            <div style={{ width: 11.22, height: 11.22, left: 4.01, top: 4.01, position: 'absolute', border: '0.80px white solid' }}></div>
                                        </div>
                                        <div style={{ width: 867, color: 'white', fontSize: 13.46, fontFamily: 'Inter', fontWeight: '500', lineHeight: 19.23, wordWrap: 'break-word' }}> {task} </div>
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