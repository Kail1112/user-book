export default {
  GET_CONTACTS: state => state.contacts,
  GET_USER_INFO: state => (id = -1) => {
    if (id !== -1) {
      return state.contacts.find(contact => contact.id === id * 1)
    } else return undefined
  },
  GET_CUR_ID_USER: state => state.idUser
}
