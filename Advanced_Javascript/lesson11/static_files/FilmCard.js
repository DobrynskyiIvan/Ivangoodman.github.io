import React from "react"

const FilmCard = props => (
    <div className="ui card">
    <span className="ui right corner label">
      <i className="empty star icon" />
    </span>
        <div className="image">
            <span className="ui green label ribbon">$ 220 </span>
            <img src="img/seeker.jpg" alt="" />
        </div>

        <div className="content">
      <span href="#" className="header">
        Legend of the seeker
      </span>
            <div className="meta">
                <i className="icon users" /> Film Director
                <span className="right floated">
          <i className="icon wait right" /> 180 min
        </span>
            </div>
        </div>
    </div>
)

export default FilmCard
