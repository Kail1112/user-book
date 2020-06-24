export default {
  addContact (context, info) { context.commit('addContact', info) },
  editContact (context, param) { context.commit('editContact', param) },
  deleteContactInfo (context, param) { context.commit('deleteContactInfo', param) },
  addContactInfo (context, param) { context.commit('addContactInfo', param) },
  deleteUser (context, id) { context.commit('deleteUser', id) },
}
