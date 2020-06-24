export default {
  addContact (state, {firstName = '', lastName = '', phones = [], address = [], emails = []}) {
    if (firstName === '' && lastName !== '') {
      state.contacts.push({id: state.idUser, firstName, lastName, phones, address, emails})
      state.idUser++
    } else throw new Error(firstName === '' ? (lastName === 'Ошибка, поля для ввода имени и фамилии пустые' ? '' : 'Ошибка, поле имени не заполнено') : (lastName === '' ? 'Ошибка, поле фамилии не заполнено' : 'Ошибка, нужно гуглить :D'))
  }
}
