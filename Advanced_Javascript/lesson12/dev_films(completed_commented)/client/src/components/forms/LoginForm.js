import React from "react"
import withForm from "../HOC/withForm"

const SingInForm = ({data, handleChange, handleSubmit}) => (
  <div>
    <form className="ui fluid form" onSubmit={handleSubmit} autoComplete="off">
      <div class="ui input">
        <input
          onChange={handleChange}
          value={data.email}
          name="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div class="ui divider"></div>
      <div class="ui input">
        <input
          onChange={handleChange}
          value={data.password}
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div class="ui divider"></div>

      <button className="ui inverted green button">OK</button>
      <button className="ui button  ">Cancel</button>
    </form>
  </div>
)

export default withForm(SingInForm)
