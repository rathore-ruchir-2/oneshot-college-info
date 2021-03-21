import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './HomeComponent'
class Main extends Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path= '/home' component={Home}/>
                    <Redirect to='/home' />
                    </Switch>
            </Router>
        );
    }
}

export default Main