// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from '@/store/store'
import jQuery from "jquery"
// import Popper from "popover.js"
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/js/bootstrap'

import firebase from "firebase"
import { FirebaseConfigs } from "./core/configs/firebase"

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'

Vue.config.productionTip = false
firebase.initializeApp(FirebaseConfigs)


router.beforeEach(
    (to, from, next) => {
        let currentUser = store.getters['auth/user'];
        if(to.matched.some(record => record.meta.forVisitors)) {
            if (store.getters['auth/check']) {
                if (currentUser.isAnonymous)
                    next()
                else
                    next({path: "/"})
            } else {
                next()
            }
        } else if(to.matched.some(record => record.meta.forAuth)) {
            if (!store.getters['auth/check']) {
                next({path: "/login"})
            } else {
                next()
            }
        } else {
            next()
        }
    }
)

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('default ', user);
        store.dispatch('auth/saveToken', {
            refreshToken: user.refreshToken
        });

        store.dispatch('auth/updateUser', {
            user: user
        })

        router.push({ path: '/' })
    } else {
        console.log('User chua login');
    }
});

window.$ = jQuery

// fontawesome.library.add(solid)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
