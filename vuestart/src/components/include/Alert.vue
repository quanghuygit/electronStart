<template>
    <div class="alert alert-dismissible fade show" role="alert" v-if="show">
        {{ message }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeAlert">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        props: ["message", "show"],
        methods: {
            closeAlert() {
                this.show = false
                this.$emit('hideAlert', true)
            }
        }
    }
</script>