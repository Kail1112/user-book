export default {
  name: 'TheFind',
  functional: true,
  props: {
    onKeyUp: { type: Function, default: () => null }
  },
  render (h, context) {
    return h('div', { attrs: { role: 'group' }, class: 'mb-2 mt-5' }, [
      h('label', { attrs: { for: 'the-search-field' } }, 'Поиск пользователей'),
      h('b-input', {
        props: { type: 'text', id: 'the-search-field' },
        on: {
          keyup: ({target: {value}}) => context.props.onKeyUp(value)
        }
      })
    ])
  }
}
