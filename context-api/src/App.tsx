import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Profile } from "./pages";
import UserStore from "./store/users";

function App () {
    return (
        <UserStore>
            <Router>
                <Switch>
                    <Route exact path='/' > <Home /> </Route>
                    <Route path='/about' > <About /> </Route>
                    <Route path='/profile' > <Profile /> </Route>
                </Switch>
            </Router>
        </UserStore>
    )
}

export default App;