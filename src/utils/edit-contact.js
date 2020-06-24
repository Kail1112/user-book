/**
 * @param {Array} contacts
 * @param {Object} param
 * @return {Array}
 * */

const editContact = (contacts, param) => {
  const {id, value, key} = param
  const indexContacts = contacts.findIndex(({id: _id}) => _id === id)
  const newInfo = {...contacts[indexContacts]}
  if (!Array.isArray(newInfo[key])) {
    newInfo[key] = value
  } else {
    const index = param.hasOwnProperty('index') ? param.index : undefined
    if (index !== undefined) {
      newInfo[key] = [value, ...newInfo[key].slice(0, index), ...newInfo[key].slice(index + 1)]
    }
  }
  return [newInfo, ...contacts.slice(0, indexContacts), ...contacts.slice(indexContacts + 1)]
}

export default editContact
