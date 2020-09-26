import shortid from 'shortid'
import { DateTime } from 'luxon'

const {
  sendSaveData,
  onOnce,
  sendVaultSyncStart,
  encryptData,
  updateAWSProfile,
  addAWSProfile,
  deleteAWSProfile,
  expose
} = window

export const deleteEntry = id => {
  return (dispatch, getState) => {
    const entry = getState().entries.items.filter(item => item.id == id)
    const entries = getState().entries.items.filter(item => item.id !== id)
    deleteAWSProfile(entry[0])
    sendSaveData(encryptData({ entries }))
    onOnce('data:saved', (event, data) => {
      dispatch({ type: 'ENTRY_REMOVED', ...data })
    })
    sendVaultSyncStart()
  }
}

export const saveEntry = credentials => {
  return (dispatch, getState) => {
    const [entries, item] = save(credentials, getState())
    sendSaveData(encryptData({ entries }))
    onOnce('data:saved', (event, data) => {
      dispatch({ type: 'SET_ENTRIES', ...data })
      dispatch({ type: 'ENTRY_SAVED', currentId: item.id, ...data })
    })
    sendVaultSyncStart()
  }
}

export const isValid = entry => {
  switch (entry.type) {
    case 'login':
      return entry.title && entry.username && entry.password
    case 'card':
      return (
        entry.title &&
        entry.number &&
        entry.pin &&
        entry.cvc &&
        entry.month &&
        entry.year
      )
    case 'note':
      return entry.title && entry.note
    case 'aws':
      return entry.name && entry.access_key && entry.secret_access_key
    default:
      return false
  }
}

const save = (data, state) => {
  const entries = state.entries.items.slice(0)
  const entry = entries.find(e => e.id === data.id)
  if (data.id && entries.find(e => e.id === data.id)) {
    if (data.type === 'aws') {
      data.old_name = entry.name
      updateAWSProfile(expose(data))
    }
    return update(entries, data)
  }
  if (data.type === 'aws') {
    addAWSProfile(expose(data))
  }
  return create(entries, data)
}

const update = (entries, data) => {
  const index = entries.findIndex(item => item.id === data.id)
  data.updatedAt = date()
  entries[index] = data
  return [entries, data]
}

const create = (entries, data) => {
  const item = buildItem(data)
  entries.push(item)
  return [entries, item]
}

const date = () => {
  return DateTime.local().toISO()
}

const buildItem = data => {
  const now = date()
  return {
    id: shortid.generate(),
    ...data,
    createdAt: now,
    updatedAt: now
  }
}
