<template>
        <tr class="item">
            <td><a href="javascript:void(0)" @click="openItemPage(data.id)">{{data.name}}</a></td>
            <td>{{data.location}}</td>
            <td>{{data.currency}}</td>
            <td><a href="javascript:void(0)">edit</a></td>
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

<style>

</style>
