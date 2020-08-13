import React from "react"
import Featured from "./Featured"
import PropTypes from "prop-types"

const FilmCard = ({film, toggleEye, togEye, clearEye}) => {
  console.log("---- rendered ---", film._id)
  return togEye === film._id ? (
    <div className="ui card">
      <div className="description meta">
        <p>{film?.description}</p>
      </div>

      <div className="content">
        <span href="#" className="header">
          {film?.title}
        </span>
        <div className="meta">
          <i className="icon users" /> {film?.director}
          <span className="right floated">
            <i className="icon wait right" />
            {film?.duration} min
          </span>
        </div>

        <i onClick={() => clearEye()} className="icon  eye slash" />
      </div>
    </div>
  ) : (
    <div className="ui card">
      <span className="ui right corner label">
        <i className="empty star icon" />
      </span>
      <div className="image">
        <span className="ui green label ribbon">$ {film?.price} </span>
        <Featured featured={film.featured} id={film._id} />
        <img src={film?.img} alt={film?.title} />
      </div>

      <div className="content">
        <span href="#" className="header">
          {film?.title}
        </span>
        <div className="meta">
          <i className="icon users" /> {film?.director}
          <span className="right floated">
            <i className="icon wait right" />
            {film?.duration} min
          </span>
        </div>
        <i onClick={() => toggleEye(film._id)} className="icon eye" />
      </div>
    </div>
  )
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }),
  toggleEye: PropTypes.func,
  togEye: PropTypes.number,
  clearEye: PropTypes.func,
}

export default React.memo(FilmCard)
