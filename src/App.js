import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home, Bar, Drag, FetchJsonp, MD5 } from './router';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path='/' component={FetchJsonp} />
                    <Route path='/home' component={Home} />
                    <Route path='/bar' component={Bar} />
                    <Route path='/drag' component={Drag} />
                    <Route path='/fetch-jsonp' component={FetchJsonp} />
                    <Route path='/md5' component={MD5} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
