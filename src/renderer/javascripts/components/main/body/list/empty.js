import React from 'react'
import Add from './add'

const Empty = () => {
  return (
    <div className="list">
      <div className="empty">No Items</div>
      <Add />
    </div>
  )
}

export default Empty
