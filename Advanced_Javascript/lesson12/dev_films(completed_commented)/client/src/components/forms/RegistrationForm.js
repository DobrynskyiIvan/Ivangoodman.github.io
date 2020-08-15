import React from "react"

import withForm from "../HOC/withForm"

const RegisterForm = ({data, handleChange, handleSubmit}) => (
  <form className="ui fluid form" onSubmit={handleSubmit} autoComplete="off">
    <div className="field">
      <input
        onChange={handleChange}
        value={data.email}
        name="email"
        className="form-control"
        placeholder="Email"
      />
    </div>

    <div className=" inline field" placeholder="Last Name">
      <input
        onChange={handleChange}
        value={data.password}
        name="password"
        className="form-control"
        placeholder="Password"
      />
    </div>

    <div className="inline field">
      <input
        onChange={handleChange}
        value={data.passwordConfirm}
        name="passwordConfirm"
        className="form-control"
        placeholder="Password confirmation"
      />
    </div>
    <button className="ui button primary">OK</button>
    <button className="ui button  ">Cancel</button>
  </form>
)

export default withForm(RegisterForm)
