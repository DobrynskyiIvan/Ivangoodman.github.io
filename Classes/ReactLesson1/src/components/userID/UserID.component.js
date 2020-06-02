import React from "react";
import "./UserID.component.scss";

function formatDate(date) {
  return date.toLocaleDateString();
}
//   UserID.propTypes = {
//     author,text,date: PropTypes.string.isRequired,
//   };

/* eslint-disable react/prop-types */
class UserID extends React.Component {
  constructor(props) {
    super(props);
    //  this.props = props;
  }

  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">{this.props.author.name}</div>
        </div>
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{formatDate(this.props.date)}</div>
      </div>
    );
  }
}

export default UserID;
