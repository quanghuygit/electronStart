<template>
    <div class="login-panel container" v-on:submit.prevent="loginAction">
        <alert class="alert-danger" :show="errors" :message="message" @hideAlert="errors = false"></alert>
        <form action="">
            <input type="text" class="form-control" placeholder="Email" name="email" v-model="email">
            <br>
            <input type="text" class="form-control" placeholder="Password" name="password" v-model="password">
            <br>
            <button type="submit">Login</button>
        </form>
        <button class="btn btn-warning" type="button" @click="loginWithGoogle">Google</button>
        <button class="btn btn-warning" type="button" @click="loginAnonymously">Anonymous</button>
    </div>
</template>

<script>
    import firebase from "firebase"
    import Alert from "../components/include/Alert"

    export default {
        name: 'Login',
        data () {
            return {
                email: '',
                password: '',
                errors: false,
                message: ""
            }
        },
        components: {
            'alert': Alert
        },
        mounted() {
            firebase.auth().getRedirectResult().then(function(result) {
                console.log(result);
            }).catch(function(error) {
                console.log(error);
            });
        },
        methods: {
            loginAction() {
                let currentUser = this.$store.getters('auth/user')
//                if (currentUser)
                let credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);

                firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then(function(usercred) {
                    var user = usercred.user;
                    console.log("Anonymous account successfully upgraded", user);
                }, function(error) {
                    console.log("Error upgrading anonymous account", error);
                });
                return;
                firebase.auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        this.$store.dispatch('auth/saveToken', {
                            refreshToken: data.user.refreshToken
                        });

                        this.$store.dispatch('auth/updateUser', {
                            user: data.user
                        })

                        this.$router.push({ path: '/' })
                    })
                    .catch(error => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(error, errorMessage);
                        this.errors = true;
                        this.message = errorMessage;
                    });
            },

            loginAnonymously() {
                firebase.auth().signInAnonymously().catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    this.errors = true;
                    this.message = errorMessage;
                });
            }
        }
    }


</script>


<style scoped="">
    .login-panel {
        max-width: 400px;
    }
</style>