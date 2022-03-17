/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = details
  return (
    <div className="latest-match-container">
      <p className="sub-heading">Latest Matches</p>
      <div className="latest-match-card">
        <div className="sec-a">
          <p className="team-name">{competingTeam}</p>
          <p className="sub-heading">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div className="sec-b">
          <img
            className="latest-match-competing-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="sec-c">
          <p className="sub-heading">First Innings</p>
          <p>{firstInnings}</p>
          <p className="sub-heading">Second Innings</p>
          <p>{secondInnings}</p>
          <p className="sub-heading">Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p className="sub-heading">Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
