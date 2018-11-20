<template>
  <div class="block">
    <Search/>
    <table>
      <SortNav/>
      <TableItem  v-for="item in data"
                  :key="item.id"
                  :data="item"
      />
    </table>
  </div>
</template>

<script>
import data from '../data/test';
import TableItem from "./TableItem";
import SortNav from "./SortNav";
import Search from "./Search";

export default {
  name: 'Table',
    components: {Search, SortNav, TableItem},
    data () {
      return {
          data: data
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
