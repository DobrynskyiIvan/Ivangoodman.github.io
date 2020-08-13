import React, {useState} from "react"
import PropTypes from "prop-types"
import FilmCard from "./FilmCard"
import Message from "../Message"
 


export default function FilmsList({films}) {
  const [togEye, setToggleEye] = useState()
  const toggleEye = id => {
    setToggleEye(id)
  }
  const clearEye = () => {
    setToggleEye()
  }
  return (
    <div className="ui four cards">
      {films.length === 0 ? (
        <Message msg="No films in out base yet" type="star outline" />
      ) : (
        films.map(film => (
          <FilmCard
            key={film._id}
            film={film}
            toggleEye={toggleEye}
            togEye={togEye}
            clearEye={clearEye}
          />
        ))
      )}
    </div>
  )
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FilmsList.defaultProps = {
  films: [],
}
