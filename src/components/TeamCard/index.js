/* eslint-disable prettier/prettier */
// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const formattedDetails = {
    name: details.name,
    id: details.id,
    teamImageUrl: details.team_image_url,
  }
  const {name, id, teamImageUrl} = formattedDetails

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="team-card-item-container">
          <img className="team-card-item-image" src={teamImageUrl} alt={name} />
          <p className="team-card-item-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
