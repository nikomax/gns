<template>
        <tr class="item">
            <td><a href="javascript:void(0)" @click="openItemPage(data.id)">{{data.name}}</a></td>
            <td>{{data.location}}</td>
            <td>{{data.currency}}</td>
        </tr>
</template>

<script>

    export default {
        name: 'TableItem',
        props: {
            data: Object
        },
        methods: {
            openItemPage (id) {
                this.$router.push({
                    name: 'items',
                    params: {
                        itemId: `${id}`
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
