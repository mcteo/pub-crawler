import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
    load: {
        key: '***REMOVED***',
        libraries: 'places,drawing,geometry',
    },
    installComponents: true,
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
