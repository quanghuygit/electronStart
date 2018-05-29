<template>
    <div class="journal-list-date">
        <div class="journal-list-wrapper" :style="styleList">
            <div class="journal-date-item" v-for="day in journalDays" :data-day="day.date">
                <span>
                    {{ day.text }}
                    <br>
                    {{ day.onlyDay }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JournalDays',
        data() {
            return {
                journalDays: [],
                styleList: ''
            }
        },

        mounted() {
            this.$store.dispatch('days/generateDays')
            this.journalDays = this.$store.getters['days/days']
            let totalWidth = (this.journalDays.length * 100) + (5 * this.journalDays.length)
            this.styleList = "width: " + totalWidth + "px"
            console.log(this.$el, $(this.$el));
            $(this.$el).scrollLeft(1000)
            this.$el.scrollLeft = 2000
            setInterval(function() {
//                this.$el.scrollLeft = 2000
                $('.journal-list-date').scrollLeft(2000)
                console.log($('.journal-list-date'));
            }, 1000)
        }
    }
</script>

<style scoped="">
    .journal-list-date {
        overflow: hidden;
        overflow-x: scroll;
        display: inline-block;
        width: 100%;
    }
    .journal-list-wrapper {
        display: inline-block;
        padding: 10px 0px
    }
    .journal-date-item {
        display: inline-block;
        float: left;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        background: #ccc;
        margin: 0 2px;
        border-radius: 5px;
    }
</style>