import InputDetail from '../components/InputDetail'

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
    const {address, emails, firstName, id, lastName, phones} = this.info
    // Редактирование email'ов
    const editEmails = h('b-card', { class: 'mb-4' }, [
      h('b-card-header', 'Email адреса:'),
      h('b-list-group', [
        h('b-list-group-item', [
          h(InputDetail, {
            props: {
              fieldName: 'Добавить новый email',
              placeholder: 'email',
              userId: id,
              fieldKey: 'email',
              type: 'email',
              onAdd: (res) => {
                console.log(res)
              }
            }
          })
        ]),
        ...emails.map((email, index) => {
          return h('b-list-group-item', [
            h(InputDetail, {
              props: {
                startValue: email,
                userId: id,
                indexField: index,
                fieldKey: 'emails',
                type: 'email',
                onDelete: (res) => {
                  console.log(res)
                }
              }
            })
          ])
        })
      ]),
    ])
    // render
    return h('b-container', { class: 'mt-5 mb-5' }, [
      h('h2', { class: 'mb-4' }, `Пользователь: ${firstName} ${lastName}`),
      editEmails
    ])
  }
}
