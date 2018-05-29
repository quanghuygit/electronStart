<template>
    <div class="navbar-content d-inline-block position-relative">
        <div class="navbar-list w-100 text-left">
            <router-link class="nav-link" :to="{ name: 'Journal' }">Journal</router-link>
            <router-link class="nav-link" to="/progress">Progress</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped="">
    .navbar-list {
        width: 100%;
        display: inline-block;
    }
    .navbar-list .nav-link {
        width: 100%;
        display: inline-block;
        padding: 10px 5px;
        color: #1b1e21;
        font-weight: bold;
        font-size: 25px;
    }

    .navbar-list .nav-link:hover, .router-link-active {
        background: #298df1;
    }
</style>