import React from "react";
import "./Profile.css";
import { users } from "../../backend/db/users";
import { useGlobalLogin } from "../../contexts/login-context";

function Profile() {
    const { userDetail } = useGlobalLogin();
    return (
        <div className="profile">
            {userDetail ? (
                <div className="user">
                    <img
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt=""
                        style={{ height: "100px", borderRadius: "100%", margin: "10px" }}
                    />
                    <p>Name : {userDetail?.name}</p>
                    <p>Email : {userDetail?.email}</p>
                    <p>address : {userDetail.address}</p>
                    {/* <p>pincode : {userDetail.pincode}</p> */}
                    <p>contact Number : {userDetail.contact}</p>
                </div>
            ) : (
                <h1>You loged out please login to se the detail</h1>
            )}
        </div>
    );
}

export default Profile;
