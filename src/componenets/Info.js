import React from 'react'
import { Header } from 'semantic-ui-react'
import axios from 'axios'

class Info extends React.Component {
  // state = { info: {}}

  // componentDidMount() {
  //   const {url} = this.props
  //   axios.get(`${url}`)
  //   .then(res => {
  //     this.setState({info: res.data.results})
  //   })
  // }

render() {
  return (
    <div className='main-header'>
      <Header size='huge'>Info</Header>
    </div>
    )
  }
}

export default Info