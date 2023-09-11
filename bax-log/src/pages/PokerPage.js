import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { Container, Row } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid } from '@mui/x-data-grid';
import PokerTable from "../components/poker_table.jpg";
import UnderPokerTable from "../components/under_poker_table.png";
import RevealCard from "../components/RevealCard";
import CountdownTimer from '../hooks/CountdownTimer';
import DateTimeDisplay from '../hooks/DateTimeDisplay';
import AppService from '../AppService';
import { useParams } from "react-router-dom";
import "./PokerPage.css";
import { Snackbar } from "@mui/material";



var stompClient = null;

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
    { id: 30, status: 'Passive', header: '#234', description: "Task description will be here" },
];

function PokerPage() {
    const [privateChats, setPrivateChats] = useState(new Map());
    const [publicChats, setPublicChats] = useState([]);
    const [tab, setTab] = useState("CHATROOM");
    const [sessionUsers, setSessionUsers] = useState([]);
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
    });


    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        setUserData({ ...userData, "connected": true });
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
        userJoin();
    }

    const userJoin = () => {
        var chatMessage = {
            senderName: userData.username,
            status: "JOIN"
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
        console.log(publicChats);
    }

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        // eslint-disable-next-line default-case
        switch (payloadData.status) {
            case "JOIN":
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                    setSessionUsers(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }

    const onPrivateMessage = (payload) => {
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
    }

    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "message": value });
    }

    const sendValue = () => {
        if (stompClient) {
            var chatMessage = {
                senderName: userData.username,
                message: userData.message,  // new participant's name will be send automatically
                status: "MESSAGE"
            };
            console.log(chatMessage);
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, "message": "" });
        }
    }

    const sendPrivateValue = () => {
        if (stompClient) {
            var chatMessage = {
                senderName: userData.username,
                receiverName: tab,
                message: userData.message,
                status: "MESSAGE"
            };

            if (userData.username !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, "message": "" });
        }
    }

    const handleUsername = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "username": value });
    }

    const registerUser = () => {
        connect();
    }

    //UPPER CODE IS FOR WEBSOCKET IMPLEMENTATION
    const params = useParams();
    const userRole = params.role;
    const paramsSessionID = params.sessionID;
    const paramsName = params.name;
    const [sendCount, setSendCount] = useState(0);
    userData.username = params.name; //Connect feature
    const [open, setOpen] = useState(false);

    async function fillPokerTable(sessionID) {
        let response = await AppService.getSessionUsers(sessionID);
        setSessionUsers(response.data);
    }

    useEffect(() => {
        fillPokerTable(paramsSessionID);
    }, [userData, [privateChats]]);

    const [task, setTask] = useState('');
    const handleRowClick = (params) => {
        setTask(`${params.row.description}`);
    };

    const updateUserPickCard = (chPickedCard, chIsPickedCard) => {
        let myRole = "";
        if (userRole === "admin") {
            myRole = "true";
        } else {
            myRole = "false";
        }
        let user = { name: paramsName, pickedCard: chPickedCard, isPickedCard: chIsPickedCard, isAdmin: myRole, sessionID: paramsSessionID };
        console.log('user => ' + JSON.stringify(user));
        AppService.updateUser(paramsName, user);
    }

    const THREE_MINS = 3 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const [myTargetDate, setTargetDate] = useState(NOW_IN_MS + THREE_MINS);
    const [startCounter, setStartCounter] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleStart = () => {
        setClickCount((c) => c + 1);
        if (clickCount === 0) {
            const START_IN_MS = new Date().getTime();
            setTargetDate(START_IN_MS + THREE_MINS);
            setStartCounter(true);
        }
    };

    const handleReset = () => {
        setStartCounter(false);
        setClickCount(0);
    };

    const handleFinish = () => {
    };

    const handleLock = () => {
        AppService.lockSession(paramsSessionID);
        alert("Session locked")
        console.log("Game is locked.")
    };

    const handleInvite = () => {
        navigator.clipboard.writeText("Join our BaX-Log session. Click the URL: http://localhost:3000/. SessionID is " + paramsSessionID);
        setOpen(true);
    };


    const handleAddTime = () => {
        console.log("Time is added.")
    };

    const handleRevealCards = () => {
        console.log("Cards revealed.")
    };

    const handleRestartGame = () => {
        console.log("Game is restarted.")
    };

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
    const [sendSucceeded, setSendSucceeded] = useState(false);

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
                break;
            case 2:
                setDiv2Clicked(true);
                break;
            case 3:
                setDiv3Clicked(true);
                break;
            case 5:
                setDiv5Clicked(true);
                break;
            case 8:
                setDiv8Clicked(true);
                break;
            case 13:
                setDiv13Clicked(true);
                break;
            case 21:
                setDiv21Clicked(true);
                break;
            case 34:
                setDiv34Clicked(true);
                break;
            case 55:
                setDiv55Clicked(true);
                break;
            case 89:
                setDiv89Clicked(true);
                break;
            case 144:
                setDivQMClicked(true);
                break;
            default:
                break;
        }
    };

    const handleSendClick = () => {
        if (sendCount === 1) {
            alert("You have already sent your card.");
        } else {
            if (div1Clicked) {
                updateUserPickCard("1", "true");
                setSendSucceeded(true);
                setSendCount((c) => c + 1);
            }
            else if (div2Clicked) {
                updateUserPickCard("2", "true");
                setSendCount((c) => c + 1);
            }
            else if (div3Clicked) {
                updateUserPickCard("3", "true");
                setSendCount((c) => c + 1);
            }
            else if (div5Clicked) {
                updateUserPickCard("5", "true");
                setSendCount((c) => c + 1);
            }
            else if (div8Clicked) {
                updateUserPickCard("8", "true");
                setSendCount((c) => c + 1);
            }
            else if (div13Clicked) {
                updateUserPickCard("13", "true");
                setSendCount((c) => c + 1);
            }
            else if (div21Clicked) {
                updateUserPickCard("21", "true");
                setSendCount((c) => c + 1);
            }
            else if (div34Clicked) {
                updateUserPickCard("34", "true");
                setSendCount((c) => c + 1);
            }
            else if (div55Clicked) {
                updateUserPickCard("55", "true");
                setSendCount((c) => c + 1);
            }
            else if (div89Clicked) {
                updateUserPickCard("89", "true");
                setSendCount((c) => c + 1);
            }
            else if (divQMClicked) {
                updateUserPickCard("?", "true");
                setSendCount((c) => c + 1);
            }
            else {
                alert("Please select a card.");
            }
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
                                            {(startCounter === true) && (
                                                <CountdownTimer targetDate={myTargetDate} />
                                            )}
                                            {(startCounter === false) && (
                                                <div className="show-counter">
                                                    <DateTimeDisplay value={2} type={'Mins'} isDanger={false} />
                                                    <p>:</p>
                                                    <DateTimeDisplay value={59} type={'Seconds'} isDanger={false} />

                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div onClick={() => handleStart()}>
                                                    <div style={{ width: 70, height: 25.26, left: 1290, top: 140, position: 'absolute', textAlign: 'center', backgroundColor: "orange", color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "1px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>Start</div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div onClick={() => handleReset()}>
                                                    <div style={{ width: 70, height: 25.26, left: 1370, top: 140, position: 'absolute', textAlign: 'center', backgroundColor: "orange", color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "1px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>Reset</div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div onClick={() => handleLock()} style={{ width: 180, height: 60, left: 1270, top: 390, position: 'absolute', textAlign: 'center', backgroundColor: "green", color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "2px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Lock the game <LockIcon sx={{ fontSize: "40px", color: "white" }}></LockIcon></div>
                                            )}
                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div>
                                                    <div onClick={() => handleInvite()} style={{ width: 180, height: 60, left: 1270, top: 470, position: 'absolute', textAlign: 'center', backgroundColor: "green", color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "2px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Invite people <PersonAddIcon sx={{ fontSize: "40px", color: "white" }}>

                                                    </PersonAddIcon> </div>
                                                    <Snackbar

                                                        message="Invite is copied"

                                                        anchorOrigin={{ vertical: "top", horizontal: "center" }}

                                                        autoHideDuration={2000}

                                                        onClose={() => setOpen(false)}

                                                        open={open}

                                                    />
                                                </div>

                                            )}

                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div onClick={() => handleAddTime()} style={{ width: 180, height: 60, left: 1270, top: 550, position: 'absolute', textAlign: 'center', backgroundColor: "green", color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "2px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add time <MoreTimeIcon sx={{ fontSize: "40px", color: "white" }}></MoreTimeIcon></div>
                                            )}
                                        </div>
                                        <div>
                                            {(userRole === "admin") && (
                                                <div onClick={() => handleRevealCards()} style={{ width: 180, height: 60, left: 1270, top: 630, position: 'absolute', textAlign: 'center', backgroundColor: "green", color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "2px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, display: 'flex', paddingLeft: '3px', justifyContent: 'left', alignItems: 'center' }}>Reveal cards <RevealCard /></div>
                                            )}
                                        </div>

                                        <div style={{ width: 60.33, height: 57.48, left: 205, top: 330, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>

                                        <div>
                                            {(sessionUsers.length > 1) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 1210, top: 330, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon> </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 2) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 710, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 3) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 710, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 4) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 510, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 5) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 510, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 6) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 900, top: 90, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 7) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 900, top: 570, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 8) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 260, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 9) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 1150, top: 170, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 10) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 260, top: 480, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 11) && (
                                                <div style={{ width: 60.33, height: 57.48, left: 1150, top: 480, position: 'absolute' }}> <AccountCircleIcon sx={{ fontSize: "60px", color: "white" }}></AccountCircleIcon></div>
                                            )}
                                        </div>

                                        <div style={{ width: 95.52, height: 25.26, left: 185, top: 295, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[0]}</div>

                                        <div>
                                            {(sessionUsers.length > 1) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 1190, top: 295, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[1]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 2) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 690, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[2]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 3) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 690, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[3]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 4) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 490, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[4]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 5) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 490, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[5]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 6) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 880, top: 55, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[6]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 7) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 880, top: 630, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[7]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 8) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 240, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[8]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 9) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 1130, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[9]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 10) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 240, top: 550, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[10]}</div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 11) && (
                                                <div style={{ width: 95.52, height: 25.26, left: 1130, top: 550, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{sessionUsers[11]}</div>
                                            )}
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

                                        <div>
                                            {(sessionUsers.length > 1) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 1050, top: 375, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: -1, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 2) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 715, top: 220, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>

                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 3) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 715, top: 440, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 4) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 520, top: 220, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 5) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 520, top: 440, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 6) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 905, top: 220, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 7) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 905, top: 440, position: 'absolute' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 8) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 390, top: 280, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ backgroundColor: (sendSucceeded) ? 'rgba(255, 0, 0, 0.8)' : "white", width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 9) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 1045, top: 240, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>

                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 10) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 425, top: 390, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 18.88, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {(sessionUsers.length > 11) && (
                                                <div style={{ width: 43.50, height: 56.35, left: 1005, top: 435, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0' }}>
                                                    <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute' }}>
                                                        <div style={{ width: 43.50, height: 56.35, left: 0, top: 0, position: 'absolute', background: '#F2F2F2', boxShadow: '0px 5px 34px rgba(0, 0, 0, 0.10)', border: '0.50px #D2D2D2 solid' }} />
                                                        <div style={{ width: 19, height: 19, left: 0, top: 0.45, position: 'absolute', textAlign: 'center', color: '#F24822', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>A</div>
                                                    </div>
                                                    <div style={{ width: 26, height: 34, left: 18, top: 30, position: 'absolute' }}>
                                                        <div style={{ width: 24, height: 24, left: 1, top: 0, position: 'absolute', background: '#F24822' }}></div>
                                                    </div>
                                                </div>
                                            )}
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

                                    <div onClick={() => handleSendClick()} style={{ width: 70, height: 68, left: 1060, top: 710, border: '2px #D2D2D2 solid', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <SendIcon sx={{ fontSize: "40px", color: "white" }}></SendIcon></div>

                                    <div>
                                        {(userRole === "admin") && (
                                            <div onClick={() => handleRestartGame()} style={{ width: 180, height: 60, left: 1270, top: 710, position: 'absolute', textAlign: 'center', backgroundColor: "green", color: 'white', fontSize: 21, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', border: "2px solid #ebebeb", borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Restart Game <RestartAltIcon sx={{ fontSize: "40px", color: "white" }}></RestartAltIcon></div>
                                        )}
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

                        <div className="container">
                            {userData.connected ?
                                <div className="chat-box">
                                    <div className="member-list">
                                        <ul>
                                            <li onClick={() => { setTab("CHATROOM") }} className={`member ${tab === "CHATROOM" && "active"}`}>Chatroom</li>

                                            {[...privateChats.keys()].map((name, index) => (
                                                <li onClick={() => { setTab(name) }} className={`member ${tab === name && "active"}`} key={index}>{name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {tab === "CHATROOM" && <div className="chat-content">
                                        <ul className="chat-messages">
                                            {publicChats.map((chat, index) => (
                                                <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                                                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                                    <div className="message-data">{chat.message}</div>
                                                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="send-message">
                                            <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />
                                            <button type="button" className="send-button" onClick={sendValue}>send</button>
                                        </div>
                                    </div>}
                                    {tab !== "CHATROOM" && <div className="chat-content">
                                        <ul className="chat-messages">
                                            {[...privateChats.get(tab)].map((chat, index) => (
                                                <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                                                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                                    <div className="message-data">{chat.message}</div>
                                                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="send-message">
                                            <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />
                                            <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
                                        </div>
                                    </div>}
                                </div>
                                :
                                <div>
                                </div>}
                        </div>
                    </div>
                </Row>
            </Container>
        </div >
    );
}
export default PokerPage;