import React from 'react'
import axios from 'axios'
import People from './People.js'
import { Header, Container } from 'semantic-ui-react'

class Home extends React.Component {

  state = { people: [],}

  componentDidMount() {
    axios.get('https://swapi.co/api/people')
      .then( res => this.setState({ people: res.data.results, }) )
  }

  render () {
    const {people} = this.state
    return (
      <Container>
        <div className='main-header'>
          <Header size='huge'>Star Wars People</Header>
        </div>
        <div className='people-container'>
          <People people={people} homeworld={people.homeworld}/>
        </div>
      </Container>
    );
  }
}

export default Home


// const Home = () => {

//   const [people, setPeople] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'http https://swapi.co/api/people/1/'
//     );

//     setPeople(response.data);
//   };

//   render() {
//     return (
//       <Grid>
//         <Grid.Row>
//           <Grid.Column mobile={16} tablet={16} computer={4} >
//           <List divided relaxed>
//             {/* { people.map( person =>
//               <List.Item key={person.id}>
//                 <List.Content>
//                   <List.Header>{person.user.name}</List.Header>
//                   <List.Content>{person.text}</List.Content>
                  
//                 </List.Content>
//               </List.Item>
//             )} */}
//             <p>{this.state.people.name}</p>
//           </List>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     )
//   }

// }
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';


// function Home() {
//   const [people, setPeople] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'https://swapi.co/api/people/'
//     );

//     setPeople(response.data);
//   };