import "./Modal.component.css";
import React from "react";
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          Open Modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal Title</h1>
              <p>I am Modal</p>

              <button
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
