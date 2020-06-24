import TheFind from '../components/TheFind'
import TheUserList from '../components/TheUserList'

export default {
  name: 'IndexPage',
  data () {
    return {
      searchWord: ''
    }
  },
  computed: {
    users () {
      if (this.searchWord !== '') {
        return this.$_getStore().getters.GET_CONTACTS.filter(user => {
          const regular = new RegExp(`(${this.searchWord})`, 'gi')
          if (regular.test(user.firstName) || regular.test(user.lastName)) return user
        })
      } return this.$_getStore().getters.GET_CONTACTS
    }
  },
  methods: {
    setSearchValue (string) { this.searchWord = string }
  },
  render (h) {
    const {users} = this
    return h('b-container', { class: 'mb-5' }, [
      h(TheFind, { props: { onKeyUp: this.setSearchValue } }),
      h(TheUserList, { props: { users } })
    ])
  }
}
