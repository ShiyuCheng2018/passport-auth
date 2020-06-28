import React, {useContext} from "react";
import UserProvider from "../../contexts/UserProvider";
import {Link} from "react-router-dom";
import {AccountCircle, Home} from "@material-ui/icons";
import UserDropDown from "./UserDropDown";
import _ from "lodash";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import {data} from "../../data";
const PassportLogo = require("../../res/passport-1.png");



const MenuBar = () =>{
    const userData = useContext(UserProvider.context);
    const loginType = !_.isEmpty(userData) ? _.find(data, d=>d.name === userData.provider) : {};

    return(
        <div className={"menu-bar"}>
            {
                !_.isEmpty(userData) && <Link to={"/profile"} className={"btn menu-btn"} title={`${loginType.name} data`}>
                    <div className={"app-icon-container"} style={{backgroundColor: loginType.color}}>
                        <img className={"btn-icon"} src={loginType.img} alt={loginType.alt} style={{position: "absolute", top: 17, paddingLeft: 5}}/>
                    </div>
                </Link>
            }
            {
                !_.isEmpty(userData) &&
                <a href="/" className={"btn menu-btn disabled"}>
                    <img src={PassportLogo} alt={"passport logo"} style={{height: 19}}/>
                </a>
            }
            <Link className={"btn menu-btn"} to={"/"} title={"Home"}>
                <Home/>
            </Link>
            {
                !_.isEmpty(userData) &&
                    <Link className={"btn menu-btn"} to={"/profile"} title={"Profile"}>
                        <AccountCircle/>
                    </Link>
            }
            <UserDropDown/>

            {
                !_.isEmpty(userData) &&
                <a href="/auth/logout" title={"Logout"} style={{float: "right"}} className={"btn menu-btn"}>
                    <LogoutIcon/>
                </a>
            }
        </div>
    )
};

export default MenuBar;