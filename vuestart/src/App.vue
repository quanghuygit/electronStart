<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <navbar></navbar>
                </div>
                <div class="col-8 main-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar.vue"

    export default {
        name: 'App',
        components: {
            navbar: Navbar
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
