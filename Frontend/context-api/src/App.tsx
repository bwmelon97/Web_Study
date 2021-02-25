import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Board, Manage } from "./pages";
import UserStore from "./store/users";

function App () {
    return (
        <UserStore>
            <Router>
                <Switch>
                    <Route exact path='/' > <Home /> </Route>
                    <Route path='/board' > <Board /> </Route>
                    <Route path='/manage' > <Manage /> </Route>
                </Switch>
            </Router>
        </UserStore>
    )
}

export default App;