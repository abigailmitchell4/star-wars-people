import React from 'react'
import Info from './Info.js'
import Person from './Person.js'
import { Grid, Card, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class People extends React.Component {
 

 render() { 
   return (
 <Grid columns={3} centered verticalAlign="middle">
    <Grid.Row stretched>
    <Grid.Column>
    { this.props.people.map( person => {
    console.log(person.props)
    return (
          <Segment key={person.url} >
            <Person {...person} />
          </Segment>
        )
    })}
    </Grid.Column>
    </Grid.Row> 
  </Grid>
   )
}}

export default People

