import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Journal from '@/components/journal/Journal'
import Progress from '@/components/progress/Progress'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/journal',
            name: 'Journal',
            component: Journal,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/progress',
            name: 'Progress',
            component: Progress,
            meta: {
                forAuth: true
            }
        }
    ]
})
