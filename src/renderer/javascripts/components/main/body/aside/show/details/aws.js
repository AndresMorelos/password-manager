import React from 'react'
import Item from './item'


const Aws = ({ entry }) => {
    return (
      <div className="entry-details">
        <Item name="name" entry={entry} label="Profile Name"/>
        <Item name="access_key" entry={entry} label="Access Key" />
        <Item name="secret_access_key" entry={entry} secure label="Secret Access Key"/>
      </div>
    )
  }
  
  export default Aws
  