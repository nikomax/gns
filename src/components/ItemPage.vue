<template>
    <div class="item-page">
        <p> name: {{itemData.name}}</p>
        <p> location: {{itemData.location}}</p>
        <p> currency: {{itemData.currency}}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'ItemPage',
        data() {
            return {
                itemData: {}
            }
        },
        props: {
            itemId: String
        },
        methods: {
            createPage() {
                this.itemData = this.list.find(item => {
                    if (item.id === this.itemId) {
                        return true
                    }
                    return false
                })
            }
        },
        computed: {
            ...mapState({
                list: 'list'
            })
        },
        mounted() {
            this.createPage()
        }
    }
</script>

<style>

</style>
