<template>
    <div class="item-page">
        <p> name: {{itemData.name}}</p>
        <p> location: {{itemData.location}}</p>
        <p> currency: {{itemData.currency}}</p>
    </div>
</template>

<script>
    import data from '../data/test'

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
                this.itemData = data.find(item => {
                    if (item.id === this.itemId) {
                        return true
                    }
                    return false
                })
            }
        },
        mounted() {
            this.createPage()
        }
    }
</script>

<style>

</style>
