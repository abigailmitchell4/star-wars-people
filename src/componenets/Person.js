import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Info from './Info.js'

class Person extends React.Component {
  state = { homeworld: {}, toggle: false}

  componentDidMount() {
    const urlWorld = this.props.homeworld
    axios.get(`${urlWorld}`)
      .then( res => this.setState({ homeworld: res.data }) )
  }

  toggleInfo= () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const {name, url, birth_year, eye_color, gender,
    hair_color, height, mass, skin_color} = this.props
    return(
      <>
     
     <div onClick={this.toggleInfo}>
     <Header>{name}</Header>
         <p>{this.state.homeworld.name}</p>
         { this.state.toggle ?
         <>
          <p>Birth Year:  {birth_year}</p>
          <p>Eye Color:  {eye_color}</p>
          <p>Gender:  {gender}</p>
          <p>Hair Color:  {hair_color}</p>
          <p>Height:  {height}</p>
          <p>Mass:  {mass}</p>
          <p>Skin Color:  {skin_color}</p>
         </>
         :
         null
         }
     </div>
   
      </>
    )
  }
}

export default Person