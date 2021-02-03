import React from "react"
import PropTypes from "prop-types"
import Featured from "./Featured"



const FilmCard = ({film}) => {
    return (
        <div className="ui card">
            <div className="image">
                <span className="ui green label ribbon">{film?.title}</span>
                <img src={film?.img} alt={film?.title} />
                <Featured featured={film.featured} id={film._id} />
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
    }).isRequired,
}

export default React.memo(FilmCard)
