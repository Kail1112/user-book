import {editContact, deleteContactInfo, addContactInfo} from '../utils'

export default {
  addContact (state, {id = -1, firstName = '', lastName = '', phones = [], address = [], emails = []}) {
    if (firstName !== '' && lastName !== '') {
      state.contacts.unshift({id, firstName, lastName, phones, address, emails})
      state.idUser++
    } else throw new Error(firstName === '' ? (lastName === 'Ошибка, поля для ввода имени и фамилии пустые' ? '' : 'Ошибка, поле имени не заполнено') : (lastName === '' ? 'Ошибка, поле фамилии не заполнено' : 'Ошибка, нужно гуглить :D'))
  },
  editContact (state, param) {
    state.contacts = editContact(state.contacts, param)
  },
  deleteContactInfo (state, param) {
    deleteContactInfo(state.contacts, param)
  },
  addContactInfo (state, param) {
    return new Promise(resolve => {
      state.contacts = addContactInfo(state.contacts, param)
      resolve()
    })
  },
  deleteUser (state, id) {
    const indexContacts = state.contacts.findIndex(({id: _id}) => _id === id)
    state.contacts = [...state.contacts.slice(0, indexContacts), ...state.contacts.slice(indexContacts + 1)]
  },
}
