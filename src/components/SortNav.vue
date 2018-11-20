<template>
    <tr class="item sort-nav">
        <td>
            <a
                href="java-script:void(0)"
                @click="$store.commit('SORT_LIST', 'name')"
                :class="sort === 'name' ? 'is-active' : null"
            >
                name
            </a>
        </td>
        <td>
            <a
                href="java-script:void(0)"
                @click="$store.commit('SORT_LIST', 'location')"
                :class="sort === 'location' ? 'is-active' : null"
            >
                location
            </a>
        </td>
        <td>
            <a
                href="java-script:void(0)"
                @click="$store.commit('SORT_LIST', 'currency')"
                :class="sort === 'currency' ? 'is-active' : null"
            >
                currency
            </a>
        </td>
    </tr>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'SortNav',
        computed: {
            ...mapState({
                sort: 'sort'
            }),
        }
    }
</script>

<style lang="sass" scoped>
a.is-active
    color: red
    text-decoration: none

</style>
