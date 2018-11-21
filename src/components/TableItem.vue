<template>
        <tr class="item" :class="edit ? 'is-edit' : null">
            <td>
                <span><a href="javascript:void(0)" @click="openItemPage(data.id)">{{name}}</a></span>
                <input type="text" :value="name" @input="(e) => {name = e.target.value}">
            </td>
            <td>
                <span>{{location}}</span>
                <input type="text" :value="location" @input="(e) => {location = e.target.value}">
            </td>
            <td>
                <span>{{currency}}</span>
                <input type="number" :value="currency" @input="(e) => {currency = e.target.value}">
            </td>
            <td>
                <a href="javascript:void(0)"
                   @click="edit = true"
                   v-if="!edit"
                >
                    edit
                </a>
                <a href="javascript:void(0)"
                   @click="changeItem"
                   v-if="edit"
                >
                    done
                </a>
            </td>
        </tr>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'TableItem',
        data () {
            return {
                edit: false,
                name: this.data.name,
                location: this.data.location,
                currency: this.data.currency,
                id: this.data.id
            }
        },
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
            },
            changeItem() {
                const self = this
                this.edit = false
                const editedItem = {
                    id: this.id,
                    name: this.name,
                    location: this.location,
                    currency: +this.currency
                };
                this.$store.commit('CHANGE_ITEM', {id: self.id, updatedItem: editedItem})
            }
        },
        computed: {
            ...mapState({
                list: 'list'
            }),
        }
    }
</script>

<style lang="sass">
.item
    input
        display: none
    &.is-edit
        span
            display: none
        input
            display: block

</style>
