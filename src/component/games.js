import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Games({match}){
        
        return (
        <div>
        <div>Game list loading here!!!!</div>
        <h3>{match.params.gameId}</h3>
        </div>
        )
 
}

export default Games;