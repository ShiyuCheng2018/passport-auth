import React, {useContext, useState} from "react";
import UserProvider from "../contexts/UserProvider";
import _ from "lodash";
import DataTags from "../components/menus/DataTags";
import Col from "../components/wrappers/Col";
import Terminal from "../components/displays/Terminal";

const LoginMsg = "Uh oh, there is nothing to show! Login to see how much of your invaluable personal data tech" +
    " companies have at their disposal.";

const Profile = () => {

    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg : "Explore your Data";
    const options = Object.keys(userData).filter(key=>{
        return userData[key] !== null;
    });


    return (
        <div className={"page"}>
            <p className={"page-title"} style={{textAlign: "center"}}>
                {text}
            </p>

            <Col className={"col-4"} style={{verticalAlign: "top"}}>
                <DataTags options={options} onClick={option => setSelected(option)} selected={selected}/>
            </Col>

            <Col className={"col-8"}>
                <Terminal userData={userData} selected={selected}/>
           </Col>

            <div style={{marginBottom: 20}}/>
        </div>
    )
};

export default Profile;