import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  render (h) {
    return h('main', [ h('router-view') ])
  }
}
