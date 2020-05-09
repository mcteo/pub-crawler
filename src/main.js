import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

require('dotenv').config()

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.GOOGLE_API_KEY,
        libraries: 'places,drawing,geometry',
    },
    installComponents: true,
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
