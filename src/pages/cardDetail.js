import EditUser from '../components/EditUser'

export default {
  name: 'CardPageDetail',
  computed: {
    info () {
      return this.$_getStore().getters.GET_USER_INFO(this.$route.params.id)
    }
  },
  beforeMount () {
    const result = this.$_getStore().getters.GET_USER_INFO(this.$route.params.id)
    if (!result) this.$router.push('/')
  },
  render (h) {
    const component = this
    const {id, firstName, lastName, emails, phones, address} = component.info
    // Список эвентов
    const events = {
      onAdd: (data) => component.$root.$store.dispatch('addContactInfo', data),
      onDelete: (data) => component.$root.$store.dispatch('deleteContactInfo', data),
      onSave: (data) => component.$root.$store.dispatch('editContact', data)
    }
    // Элемент редактирования email'ов
    const emailsEditElement = h(EditUser, {
      props: {
        title: 'Email адреса:',
        fieldName: 'Добавить новый email',
        placeholder: 'email',
        userId: id,
        fieldKey: 'emails',
        type: 'email',
        events,
        data: emails
      }
    })
    // Элемент редактирования номеров телефона
    const phonesEditElement = h(EditUser, {
      props: {
        title: 'Номера телефонов:',
        fieldName: 'Добавить новый номер телефона:',
        placeholder: 'Номер телефона',
        userId: id,
        fieldKey: 'phones',
        type: 'text',
        events,
        data: phones,
        pattern: '(998)\\d{2}\\s\\d{3}\\-\\d{2}\\-\\d{2}'
      }
    })
    // Элемент редактирования адресов
    const addressEditElement = h(EditUser, {
      props: {
        title: 'Адреса:',
        fieldName: 'Добавить новый адрес:',
        placeholder: 'Адрес',
        userId: id,
        fieldKey: 'address',
        type: 'text',
        events,
        data: address,
        pattern: '.{1,}'
      }
    })
    // render
    return h('b-container', { class: 'mt-5 mb-5' }, [
      h('h2', { class: 'mb-4' }, `Пользователь: ${firstName} ${lastName}`),
      emailsEditElement,
      phonesEditElement,
      addressEditElement
    ])
  }
}
