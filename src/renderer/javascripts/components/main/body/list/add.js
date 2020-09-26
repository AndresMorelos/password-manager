import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Plus from 'plus.svg'

const Add = () => {
  const dispatch = useDispatch()
  const { scope } = useSelector(state => state.filters)

  const onAddEntry = () => {
    if (scope === 'audit') {
      dispatch({ type: 'SET_FILTER_SCOPE', scope: 'login' })
    }
    dispatch({ type: 'NEW_ENTRY' })
  }

  return (
    <div className="entry" onClick={onAddEntry}>
      <>
        <div className="icon">
          <Plus width="32" />
        </div>
        <div className="description">
          <div className="primary">Add entry</div>
        </div>
      </>
    </div>
  )
}

export default Add
