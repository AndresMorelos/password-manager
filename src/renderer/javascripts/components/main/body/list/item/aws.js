import React from 'react'
import Profile from 'aws/profile.svg'

const AWS = ({ entry }) => {

  return (
    <>
      <div className="icon"><Profile width="32"/></div>
      <div className="description">
        <div className="primary">{entry.name}</div>
      </div>
    </>
  )
}

export default AWS
