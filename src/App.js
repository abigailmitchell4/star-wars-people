import React from 'react'
import './App.css'
import Home from './componenets/Home.js'
import Info from './componenets/Info.js'
import { Route, Switch } from 'react-router-dom';



const App = () => (
  <>
   <Switch>
     <Route exact path="/" component={Home} />
     {/* <Route exact path="https://swapi.co/api/people/:id" component={Info} /> */}
   </Switch>
  </>
)

export default App
