import InputDetail from "../InputDetail";

export default {
  name: 'EditUser',
  functional: true,
  props: {
    title: { type: String, default: '' },
    fieldName: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    userId: { type: Number, default: -1 },
    fieldKey: { type: String, required: true },
    type: { type: String, default: 'text' },
    events: { type: Object, default: () => ({}) },
    pattern: { type: String, default: '' },
    data: { type: Array, default: () => ([]) }
  },
  render (h, context) {
    const {title, fieldName, placeholder, userId, fieldKey, type, events, pattern, data} = context.props
    const onAdd = events.hasOwnProperty('onAdd') ? events.onAdd : () => null
    const onDelete = events.hasOwnProperty('onDelete') ? events.onDelete : () => null
    const onSave = events.hasOwnProperty('onSave') ? events.onSave : () => null
    return h('b-card', { class: 'mb-4' }, [
      h('b-card-header', title),
      h('b-list-group', [
        h('b-list-group-item', [
          h(InputDetail, {
            props: {
              fieldName,
              placeholder,
              userId,
              fieldKey,
              type,
              onAdd,
              pattern
            }
          })
        ]),
        ...data.map((item, index) => {
          return h('b-list-group-item', [
            h(InputDetail, {
              props: {
                startValue: item,
                userId,
                indexField: index,
                fieldKey,
                type,
                onDelete,
                onSave,
                pattern
              }
            })
          ])
        })
      ])
    ])
  }
}
