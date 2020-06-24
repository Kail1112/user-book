export default {
  name: 'InputDetail',
  data () {
    return {
      value: null,
      state: null
    }
  },
  props: {
    fieldName: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    signature: { type: String, default: '' },
    uniqId: { type: String, default: '' },
    onAdd: { type: Function, default: () => null },
    onDelete: { type: Function, default: () => null },
    onSave: { type: Function, default: () => null },
    onKeyUp: { type: Function, default: () => null },
    pattern: { type: String, default: '' },
    startValue: { type: String, default: '' },
    userId: { type: Number, default: -1 },
    indexField: { type: Number, default: -1 },
    fieldKey: { type: String, default: '' },
    type: { type: String, default: 'text' }
  },
  render (h) {
    const component = this
    const {fieldName, placeholder, signature, uniqId, onAdd, onDelete, onSave, onKeyUp, pattern, startValue, userId, indexField, fieldKey, type} = component.$props
    // Элемент оглавления для поля
    const titleElement = fieldName !== '' ? h('label', { attrs: { for: uniqId } }, fieldName) : null
    // Кнопка сохранения
    const btnSaveElement = onSave.length > 0 ? h('b-button', {
      props: { variant: 'success', tag: 'span', disabled: !(component.state !== null && startValue !== component.value) },
      on: {
        click: () => (component.state !== null && startValue !== component.value) && onSave({id: userId, index: indexField, value: component.value, key: fieldKey})
      }
    }, 'Сохранить') : null
    // Кнопка на действие
    const btnAddElement = onAdd.length > 0 || onDelete.length > 0 ? h('b-input-group-append', [
      btnSaveElement,
      onAdd.length > 0 ? h('b-button', {
        props: { variant: 'success', tag: 'span', disabled: component.state !== null ? !component.state : true },
        on: {
          click: () => {
            component.state && onAdd({id: userId, value: component.value, key: fieldKey}).then(() => component.value = '')
          }
        }
      }, 'Добавить') : null,
      onDelete.length > 0 ? h('b-button', {
        props: { variant: 'danger', tag: 'span' },
        on: { click: () => onDelete({id: userId, index: indexField, key: fieldKey}) }
      }, 'Удалить') : null,
    ]) : null
    // Элемент подписи поля
    const signatureElement = signature !== '' ? h('b-form-text', signature) : null
    if (pattern === '' && type !== 'email') component.state = true
    // render
    return h('div', { attrs: { role: 'group' } }, [
      titleElement,
      h('b-input-group', [
        h('b-form-input', {
          props: {
            type,
            id: titleElement !== null ? uniqId : null,
            placeholder,
            state: component.state,
            value: startValue || component.value
          },
          on: {
            keyup: ({target: {value}}) => {
              if (pattern !== '') {
                if (type === 'email') {
                  component.state = true
                } else {
                  const regular = new RegExp(pattern, 'g')
                  if (value.length > 0)
                    component.state = regular.test(value)
                  else
                    component.state = null
                }
              } else {
                if (type === 'email') {
                  const regular = new RegExp('\\w+\\@\\w+\\.\\w{2,}', 'g')
                  if (value.length > 0)
                    component.state = regular.test(value)
                  else
                    component.state = null
                }
              }
              component.value = value
              onKeyUp(value)
            }
          }
        }),
        btnAddElement
      ]),
      signatureElement
    ])
  }
}
