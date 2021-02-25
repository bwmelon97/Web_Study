import React from "react";
import { Route, Switch } from 'react-router-dom';

import { Home, Detail } from "../pages";


function App () {
    
    return (
        <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route path='/detail/:id'> <Detail /> </Route>
        </Switch>
    )
}

export default App;