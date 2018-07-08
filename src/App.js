import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.css';
import { Home, Bar } from './router';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/bar' component={Bar} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
