import React from 'react'
import classnames from 'classnames'

export default ({
  name,
  entry,
  validate,
  onChange,
  rows,
  maxLength,
  label = null,
  options = []
}) => {
  const isEmpty = () => {
    return entry[name.toLowerCase()].trim() === ''
  }

  const classNames = () => {
    return classnames('field', { error: validate && isEmpty() })
  }

  const renderInput = () => {
    if (rows && rows !== '1') {
      return (
        <textarea
          name={name.toLowerCase()}
          cols="10"
          rows={rows}
          onChange={onChange}
          maxLength={maxLength ? maxLength : ''}
          value={entry[name.toLowerCase()]}
        />
      )
    } else if (options.length > 0) {
      return (
        <select name={name.toLowerCase()} onChange={onChange}>
          {options.map((option, index) => {
            return (
              <option value={option} key={`option-${index}`}>
                {option.toString()}
              </option>
            )
          })}
        </select>
      )
    }
    return (
      <input
        name={name.toLowerCase()}
        type="text"
        maxLength={maxLength ? maxLength : ''}
        onChange={onChange}
        value={entry[name.toLowerCase()]}
      />
    )
  }

  return (
    <div className={classNames()}>
      <label htmlFor="">{label !== null ? label : name}</label>
      {renderInput()}
    </div>
  )
}
