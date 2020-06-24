/**
 * @param {Array} contacts
 * @param {Object} param
 * @return {VoidFunction}
 * */

const deleteContactInfo = (contacts, param) => {
  const {id, index, key} = param
  const indexContacts = contacts.findIndex(({id: _id}) => _id === id)
  contacts[indexContacts][key] = [...contacts[indexContacts][key].slice(0, index), ...contacts[indexContacts][key].slice(index + 1)]
}

export default deleteContactInfo
