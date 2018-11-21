const mutations = {
    SORT_LIST: (state, method) => {
        state.sort = method;
    },
    CHANGE_ITEM: (state, {id, updatedItem}) => {
        state.list = state.list.map(item => {
            return item.id === id ? updatedItem : item
        })
    },
}

export default mutations
