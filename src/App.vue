<template>
  <div id="app">
    <h1>Pub Crawl Generator</h1>
    <SearchBar v-on:locationChanged="parentFunc"/>
    <div class="columns">
      <div class="column is-two-thirds">
        <Map :center="myloc"/>
      </div>
      <div class="column">
        <PubList/>
      </div>
    </div>
  </div>
</template>

<script>
import Map from './components/Map'
import SearchBar from './components/SearchBar'
import PubList from './components/PubList'

export default {
  name: 'App',
  components: {
    Map,
    SearchBar,
    PubList
  },
  data () {
    return {
      myloc: {
        lat: 52.836168,
        lng: -6.9304605
      }
    }
  },
  methods: {
    parentFunc (newloc) {
      console.log('Parent was triggered!')
      console.log(newloc)
      this.myloc = newloc
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
