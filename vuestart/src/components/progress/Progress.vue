<template>
    <div class="journal-page container-fluid">
        <div class="row journal-header">
            <div class="col-8">
                <h1>Progress</h1>
            </div>
            <div class="col-4">
                <button class="btn btn-default btn success">Add</button>
            </div>
        </div>

        <div class="row journal-day">
            <div class="col-6">Morning</div>
            <div class="col-6">All habits</div>
        </div>

        <div class="row journal-list">
            <ul>
                <li>Drink 8 glasses of water</li>
                <li>Cook a meal</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Progress'
    }
</script>

<style scoped="">
    .journal-list ul {
        list-style: none;
    }
    .journal-list ul li {
        width: 100%;
        display: inline-block;
        font-size: 20px;
        color: #040505;
        font-weight: bold;
        padding: 10px 5px;
    }
</style>