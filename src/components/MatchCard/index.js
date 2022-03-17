/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = details
  const matchStatusClass = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card-container">
      <img
        className="match-card-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="sub-heading">{competingTeam}</p>
      <p>{result}</p>
      <p className={`sub-heading ${matchStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
