import React from 'react';
import {Router, Route} from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import MenuBar from "./components/menus/MenuBar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path={"/"} component={MenuBar}/>
                <Route path={"/profile"} component={Profile}/>
            </UserProvider>
            <Route exact path={"/"} component={Home}/>
        </Router>
    );
};

export default App;
