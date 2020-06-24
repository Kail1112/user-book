import UserCard from '../UserCard'

export default {
  name: 'TheUserList',
  functional: true,
  props: {
    users: { type: Array, default: () => ([]) },
    root: { type: Object, default: () => ({}) }
  },
  render (h, context) {
    const {users, root} = context.props
    return h('b-row', users.map(user => h(UserCard, {props: {...user, root}})))
  }
}
