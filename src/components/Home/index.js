/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamsList: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getALlIplTeams()
  }

  getALlIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsList = await response.json()
    console.dir(teamsList.teams)
    this.setState({teamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="home-heading-container">
              <img
                className="home-heading-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="home-heading">IPL Dashboard</h1>
            </div>

            <ul className="teams-list-container">
              {teamsList.teams.map(team => (
                <TeamCard key={team.id} details={team} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
