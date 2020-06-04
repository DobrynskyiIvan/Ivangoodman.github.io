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
    this.state = { isToggleOn: true };

    // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
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

        <button className="toggleButton" onClick={this.handleClick}>
        {this.state.isToggleOn ? " Toggle ON" : "OFF"}
      </button>
   

      </div>
    );
  }
}

export default UserID;
