import UserCard from '../UserCard'

export default {
  name: 'TheUserList',
  functional: true,
  props: {
    users: { type: Array, default: () => ([]) }
  },
  render (h, context) {
    const {users} = context.props
    return h('b-card-group', { props: { deck: true } }, users.map(user => h(UserCard, { props: user })))
  }
}
