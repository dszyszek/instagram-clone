import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

const Router = () => (
    <BrowserRouter>

            <div className="App">
                <header className="App-header">
                    <Navbar />
                    
                    <Switch>
                        <Route path='/' component={MainContent} exact={true} />
                        <Route path='/:profile' component={Profile} />
                    </Switch>
                
                </header>
            </div>

    </BrowserRouter>
);

export default Router;