import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Home, Profile } from "./pages";


function App() {

    return (
        <Switch>
            <Route exact path='/' > <Home /> </Route>
            <Route path='/profile' > <Profile /> </Route>
        </Switch>
    )
}

export default App;