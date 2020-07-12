import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WineList from '../components/WineList/WineList.js'
import WineAPI from '../api/WineAPI.js'

class HomePage extends Component {
  state = {
    wines: null
  }

  componentDidMount(){
    WineAPI.fetchWines()
      .then((apiResponseJSON) => {
        this.setState({
          wines: apiResponseJSON.wines
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Link to='/add-wine'>Add New Wine</Link>
        <h1> All Wines </h1>
        {
          this.state.wines
          ?
          <WineList wines={this.state.wines} />
          :
          <div>
            Loading...
          </div>

        }
      </div>
    )
  }
}

export default HomePage
