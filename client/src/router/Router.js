import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';

const Router = () => (
    <BrowserRouter>

            <div className="App">
                <header className="App-header">
                    <Navbar />
                    
                    <Switch>
                        <Route path='/' component={MainContent} exact={true} />
                    </Switch>
                
                </header>
            </div>

    </BrowserRouter>
);

export default Router;