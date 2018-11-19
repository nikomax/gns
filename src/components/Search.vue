<template>
    <div class="search">
        <input type="text" v-model="searchValue">
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
        }
    }
</script>

<style scoped>

</style>
