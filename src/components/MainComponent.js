import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './HomeComponent'
import PersistentDrawerLeft from './Header'
import CollegeDetail from './CollegeDetail'

class Main extends Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <Router>
                <PersistentDrawerLeft />
                <Switch>
                        <Route exact path= '/home' component={() => <Home /> }/>
                        <Route exact path='/colleges/:collegeId' component={(props) => <CollegeDetail {...props}/> } />
                        <Redirect to='/home' />
                    </Switch>
            </Router>
        );
    }
}

export default Main