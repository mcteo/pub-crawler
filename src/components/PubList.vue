<template>
  <ol class="publist">
    <li v-for="(pub, index) in publist" :key="pub.id">
      {{ index }} - {{ pub.name }}
    </li>
  </ol>
</template>

<script>
export default {
  name: 'PubList',
  data () {
    return {
      publist: [{
        name: 'Pub The First'
      }, {
        name: 'Pub The Second'
      }, {
        name: 'Pub The Third'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: magenta;
  /*min-height: 200px;*/
}
</style>
