import UserCardField from './components/UserCardField'

export default {
  name: 'UserCard',
  functional: true,
  props: {
    id: { type: Number, default: () => -1, required: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    phones: { type: Array, default: () => ([]) },
    address: { type: Array, default: () => ([]) },
    emails: { type: Array, default: () => ([]) }
  },
  render (h, context) {
    const {id, firstName, lastName, phones, address, emails} = context.props
    // Список email адресов
    const emailsElement = emails.length > 0 ? h(UserCardField, { props: { data: emails, title: 'Email\'s:' } }) : null
    // Список адресов
    const addressElement = address.length > 0 ? h(UserCardField, { props: { data: address, title: 'Адреса:' } }) : null
    // Список номеров телефона
    const phonesElement = phones.length > 0 ? h(UserCardField, { props: { data: phones, title: 'Номера:' } }) : null
    // render
    return h('b-card', { class: 'mb-4' }, [
      h('b-card-header', [
        h('router-link', { props: { to: { path: `/card/${id}` } } }, [ h('h5', { class: 'd-inline-block mt-2 mb-2' }, `${firstName} ${lastName}`) ])
      ]),
      h('b-list-group', { class: 'mb-2' }, [
        emailsElement,
        addressElement,
        phonesElement
      ]),
      h('b-card-footer', [
        h('b-row', { class: 'flex-wrap justify-content-between' }, [
          h('b-col', { props: { cols: '12' } }, [
            h('b-button', { class: 'w-100 mt-2 mb-2', props: { variant: 'outline-success', to: `/card/${id}` } }, 'Редактировать')
          ]),
          h('b-col', { props: { cols: '12' } }, [
            h('b-button', { class: 'w-100 mt-2 mb-2', props: { variant: 'outline-danger' } }, 'Удалить')
          ])
        ])
      ])
    ])
  }
}
