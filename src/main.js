// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as VueGoogleMaps from 'vue2-google-maps'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCitBdQoj1x86_WC-faulCv_iz2LSZicDI',
    libraries: 'places,drawing,geometry'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
