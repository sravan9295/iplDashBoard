/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'
import uuid from 'uuid'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentMatches = data.recent_matches.map(eachMatch =>
      this.formatRecentMatchData(eachMatch),
    )

    const formattedData = {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    }

    this.setState({isLoading: false, formattedData})
  }

  formatRecentMatchData = recentMatch => ({
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    result: recentMatch.result,
    matchStatus: recentMatch.match_status,
  })

  renderTeamMatchesDetails = () => {
    const {formattedData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData
    console.dir(formattedData)

    return (
      <div className="team-matches-body-container">
        <div className="team-banner-container">
          <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        </div>
        <LatestMatch details={latestMatchDetails} />
        <ul className="match-card-list-container">
          {recentMatches.map(match => (
            <MatchCard key={match.id} details={match} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#d34453" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
