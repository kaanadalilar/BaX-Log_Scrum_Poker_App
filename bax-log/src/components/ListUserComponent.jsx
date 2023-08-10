import axios from 'axios'
import React, { useState, useEffect, Component } from "react";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

function ListUserComponent() {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [changed, setChanged] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/users`)
            .then((res) => {
                setData(res.data);
                setFlag(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [changed]);

    return (<div>
        <h2 className="text-center">User List</h2>

        <br></br>
        <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> User ID</th>
                        <th> User First Name</th>
                        <th> User Last Name</th>
                        <th> User Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            user =>
                                <tr>
                                    <td> {user.userID} </td>
                                    <td> {user.firstName} </td>
                                    <td> {user.lastName}</td>
                                    <td> {user.emailID}</td>
                                </tr>

                        )
                    }
                </tbody>
            </table>

        </div>

    </div >)

}

export default ListUserComponent