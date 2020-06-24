export default {
  name: 'UserCardField',
  functional: true,
  props: {
    data: { type: Array, default: () =>([]) },
    title: { type: String, required: true }
  },
  render (h, context) {
    return h('b-list-group-item', [
      h('b-row', { class: 'flex-wrap' }, [
        h('b-col', { props: { cols: 12 } }, [
          h('h6', context.props.title) ]),
          ...context.props.data.map(data => h('b-col', { props: { cols: 12, md: 'auto' } }, [ h('p', { class: 'mt-2 mb-2' }, data) ]))
        ])
      ]
    )
  }
}
