import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './HomeComponent'
import PersistentDrawerLeft from './Header'
import CollegeDetail from './CollegeDetail'
import Student from './Students'
import StudentDetail from './StudentDetail'
import New from './newComponent';
import Dashboard from './Dashboard'
import CollegeListOfState from './CollegeListOfState'
import SimilarCollege from './SimilarColleges'

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
                        {/* <Route exact path='/colleges/:collegeId' component={(props) => <CollegeDetail {...props}/> } /> */}
                        <Route exact path='/colleges/:collegeId/students' component={(props) => <Student {...props}/>} />
                        <Route exact path='/colleges/:collegeId/students/:studentId' component={(props) => <StudentDetail {...props}/>} />
                        <Route exact path='/new' component={(props) => <New />} />
                        <Route exact path='/dashboard' component={(props) => <Dashboard {...props}/>} />
                        <Route exact path='/colleges/state/:state' component={(props) => <CollegeListOfState {...props}/> } />
                        <Route exact path='/colleges/name/:collegeName' component={(props) => <CollegeDetail {...props}/> } />
                        <Route exact path='/colleges/:collegeId/similarColleges' component={(props) => <SimilarCollege {...props}/> } />
                        <Redirect to='/home' />
                    </Switch>
            </Router>
        );
    }
}

export default Main