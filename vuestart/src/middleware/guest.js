import store from '@/store/store'

export default (to, from, next) => {
    if (store.getters['auth/check']) {
        next({ name: 'home' })
    } else {
        next()
    }
}