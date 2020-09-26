import React from 'react'

import Switcher from './switcher'
import Settings from './settings'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Switcher />
      <Settings />
    </div>
  )
}
export default Sidebar
