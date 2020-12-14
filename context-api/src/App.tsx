import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Profile } from "./pages";

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path='/' > <Home /> </Route>
                <Route path='/about' > <About /> </Route>
                <Route path='/profile' > <Profile /> </Route>
            </Switch>
        </Router>
    )
}

export default App;