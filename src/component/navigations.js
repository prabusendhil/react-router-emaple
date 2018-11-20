import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Games from './games';
class Navigations extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     gameId : props.match.params.gameId
        // }
    }
    render(){
        return (
        <Router>   
        <div>
        <div>Navigations will starts from here !!!!</div>
        <ul>
            <li><Link to={`${this.props.match.url}/cricket`}>Cricket</Link></li>
            <li><Link to={`${this.props.match.url}/football`}>Football</Link></li>
        </ul>

            <Route path={`${this.props.match.path}/:gameId`} component={Games}/>
            <Route exact path={this.props.match.path} render={() =><h3>Please select a games</h3>} />
        </div>
        </Router>
        )
    }
}

export default Navigations;