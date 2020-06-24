/**
 * @param {Array} contacts
 * @param {Object} param
 * @return {Array}
 * */

const addContactInfo = (contacts, param) => {
  const {id, value, key} = param
  const indexContacts = contacts.findIndex(({id: _id}) => _id === id)
  const newInfo = {...contacts[indexContacts]}
  if (Array.isArray(newInfo[key])) {
    newInfo[key].unshift(value)
  } else {
    newInfo[key] = value
  }
  return [newInfo, ...contacts.slice(0, indexContacts), ...contacts.slice(indexContacts + 1)]
}

export default addContactInfo
