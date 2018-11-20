<template>
    <div class="search">
        <input type="text" @input="updateValue">
        <div>{{searchValue}}</div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            updateValue (e) {
                this.$emit('handleInput', e.target.value)
                this.searchValue = e.target.value
            }
        }
    }
</script>

<style scoped>

</style>
