<template>
    <div class="demo">
        Logout page
    </div>
</template>

<script>
    import firebase from "firebase"
    import Alert from "../components/include/Alert"

    export default {
        name: 'Logout',
        mounted() {
            console.log('mounted');
            firebase.auth().signOut()
                .then(() => {
                this.$store.dispatch('auth/logout')
                this.$router.push({path: '/login'})
                console.log("Logged out!")
            })
            .catch(error => {
                console.log(error.code);
                console.log(error.message);
            });
        },
        computed() {
            console.log('computed');
            firebase.auth().signOut().then(function() {
                console.log("Logged out!")
            }, function(error) {
                console.log(error.code);
                console.log(error.message);
            });
        }
    }
</script>

<style scoped="">
    .login-panel {
        max-width: 400px;
    }
</style>