import React from 'react'
import './Modeselector.css'

export default props => {

  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  return (
    <div className='blockStyle' style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
      <p className="listStyle">Chose the list style: </p>
      <button onClick={() => props.onSelect(smallUrl)} className="btn btn-success">Short</button>
      <button onClick={() => props.onSelect(bigUrl)} className="btn btn-danger">Long</button>
    </div>
  )
}