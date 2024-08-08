import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, teamImageUrl, id} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
