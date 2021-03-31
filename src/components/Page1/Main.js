import React from 'react'

import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './Form'
import Form2 from './Form2'

const Main = () => {
    return (
        <Router>
      
      <div className = "row " style={{marginLeft:250 , marginTop :20}}>
            
            <Link to='/Form2' className = "btn  btn-outline-secondary " style = {{ marginLeft:3 , width : 150 ,height:35}} ><strong>Add Meal</strong> </Link>

            <Link to='/Form1' className = "btn  btn-outline-secondary" style = {{marginLeft:3 ,   width : 150 ,height:35}}><strong>Add Order </strong> </Link>
            <Link to='/Form1' className = "btn  btn-outline-secondary" style = {{marginLeft:3 ,   width : 150 ,height:35}}><strong> Reports </strong> </Link>
            
     </div>   
     <Switch>
        <Route exact path='/Form2' >
          <Form2/>
        </Route>
        <Route path='/Form1'>
          <Form />
        </Route>
        
      </Switch>




        </Router>
    )
}

export default Main
