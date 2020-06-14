import React from 'react'

export default ({person}) => (
  <div>
    <p>Chosen User <b>{person.firstName + ' ' + person.lastName}</b></p>
    <p>
    Description: <br />
    <textarea defaultValue={person.description} />
    </p>

    <p>address: <b>{person.address.streetAddress}</b></p>
    <p>City: <b>{person.address.city}</b></p>
    <p>Province/stete: <b>{person.address.state}</b></p>
    <p>Index: <b>{person.address.zip}</b></p>

  </div>
)