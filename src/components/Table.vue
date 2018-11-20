<template>
    <div class="block">
        <Search @handleInput="handleValue"/>
        <table>
            <div>Итого: {{currencySumm}}</div>
            <SortNav/>
            <TableItem v-for="item in sortList"
                       :key="item.id"
                       :data="item"
            />
        </table>
    </div>
</template>

<script>
    import TableItem from "./TableItem"
    import SortNav from "./SortNav"
    import Search from "./Search"
    import {mapState} from 'vuex'

    export default {
        name: 'Table',
        components: {Search, SortNav, TableItem},
        data() {
            return {
                inputText: ''
            }
        },
        methods: {
            handleValue(value) {
                this.inputText = value;
            }
        },
        computed: {
            ...mapState({
                list: 'list', sort: 'sort'
            }),
            currencySumm() {
                let summ = 0
                this.list.forEach(item => {
                    summ += item.currency
                })
                return summ;
            },
            searchResults: function () {
                let resultItems = [];
                if (this.inputText) {
                    this.list.forEach(item => {
                        if (item.name.toLowerCase().includes(this.inputText.toLowerCase())) {
                            resultItems.push(item)
                        }
                    })
                } else {
                    resultItems = this.list;
                }

                return resultItems
            },
            sortList() {
                const list = this.searchResults
                let sortedList
                if (this.sort === 'all') {
                    sortedList = list
                } else if (this.sort === 'name') {
                    sortedList = list.sort((prev, next) => {
                        if (prev.name.toLowerCase() < next.name.toLowerCase()) {
                            return -1
                        }
                        if (prev.name.toLowerCase() > next.name.toLowerCase()) {
                            return 1
                        }
                        return 0
                    })
                } else if (this.sort === 'location') {
                    sortedList = list.sort((prev, next) => {
                        if (prev.location.toLowerCase() < next.location.toLowerCase()) {
                            return -1
                        }
                        if (prev.location.toLowerCase() > next.location.toLowerCase()) {
                            return 1
                        }
                        return 0
                    })
                } else if (this.sort === 'currency') {
                    sortedList = list.sort((prev, next) => prev.currency - next.currency)
                }
                return sortedList
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
