import {
  editContact,
  deleteContactInfo,
  addContactInfo
} from '../utils'

import EditUser from '../components/EditUser'
import InputDetail from '../components/InputDetail'

export default {
  name: 'AddUserPage',
  data () {
    return {
      contacts: [
        {
          id: this.$root.$store.getters.GET_CUR_ID_USER,
          firstName: '',
          lastName: '',
          phones: [],
          address: [],
          emails: []
        }
      ]
    }
  },
  render (h) {
    const component = this
    const id = component.contacts[0].id
    // Список эвентов
    const events = {
      onAdd: (data) => new Promise(resolve => {
        component.contacts = addContactInfo(component.contacts, data)
        resolve()
      }),
      onDelete: (data) => deleteContactInfo(component.contacts, data),
      onSave: (data) => {
        component.contacts = editContact(component.contacts, data)
      }
    }
    // Редактирование имени и фамилии
    const editFirstLastNameElement = h('b-row', { class: 'flex-wrap mb-2' }, [
      h('b-col', { props: { cols: 12, md: 6 } }, [
        h(InputDetail, {
          class: 'mb-2',
          props: {
            fieldName: 'Имя',
            placeholder: 'Имя',
            uniqId: 'user-add-filed-first-name',
            onKeyUp: firstName => component.contacts[0].firstName = firstName
          }
        })
      ]),
      h('b-col', { props: { cols: 12, md: 6 } }, [
        h(InputDetail, {
          class: 'mb-2',
          props: {
            fieldName: 'Фамилия',
            placeholder: 'Фамилия',
            uniqId: 'user-add-filed-last-name',
            onKeyUp: lastName => component.contacts[0].lastName = lastName
          }
        })
      ])
    ])
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
        data: component.contacts[0].emails
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
        data: component.contacts[0].phones,
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
        data: component.contacts[0].address,
        pattern: '.{1,}'
      }
    })
    // render
    return h('b-container', { class: 'mt-5 mb-5' }, [
      h('b-form', {
        on: {
          submit: e => {
            e.preventDefault()
            component.$root.$store.dispatch('addContact', component.contacts[0])
            component.$root.$router.push('/')
          }
        }
      }, [
        h('h2', { class: 'mb-4' }, 'Добавление нового пользователя'),
        editFirstLastNameElement,
        emailsEditElement,
        phonesEditElement,
        addressEditElement,
        h('b-button', { props: { type: 'submit' } }, 'Добавить пользователя')
      ]),
    ])
  }
}
