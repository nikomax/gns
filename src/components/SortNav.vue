<template>
    <tr class="item sort-nav">
        <td><a href="java-script:void(0)" @click="$store.commit('SORT_LIST', 'name')">name</a></td>
        <td><a href="java-script:void(0)" @click="$store.commit('SORT_LIST', 'location')">location</a></td>
        <td><a href="java-script:void(0)" @click="$store.commit('SORT_LIST', 'currency')">currency</a></td>
    </tr>
</template>

<script>
    export default {
        name: 'SortNav'
    }
</script>

<style>

</style>
