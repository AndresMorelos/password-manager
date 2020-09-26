import React from 'react'
import Copy from 'copy.svg'
import { copy } from 'services/copy'

const { decrypt } = window

export default ({ entry, name, link, cc, secure, label = null }) => {
  const onClick = event => {
    window.openLink(event.target.href)
  }

  const value = () => {
    if (link) {
      return (
        <a href={entry[name.toLowerCase()]} onClick={onClick}>
          {entry[name.toLowerCase()]}
        </a>
      )
    } else if (cc) {
      return entry[name.toLowerCase()].match(/.{1,4}/g).join(' ')
    } else if (secure) {
      return decrypt(entry[name.toLowerCase()])
    } else {
      if (typeof entry[name.toLowerCase()] === 'boolean') {
        return entry[name.toLowerCase()].toString()
      } else {
        return entry[name.toLowerCase()]
      }
    }
  }

  const copyValue = () => {
    if (secure) return decrypt(entry[name.toLowerCase()])
    return entry[name.toLowerCase()]
  }

  const className = () => {
    return secure ? 'item secure' : 'item'
  }

  if (entry[name.toLowerCase()] === '') return null

  if (value() !== undefined && value() !== null) {
    return (
      <div className={className()}>
        <div className="label">{label !== null ? label : name}</div>
        <div className="value">{value()}</div>
        <Copy width="16" height="16" onClick={() => copy(copyValue())} />
      </div>
    )
  }
  return <></>
}
