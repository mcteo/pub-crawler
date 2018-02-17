<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <gmap-autocomplete
        @place_changed="jumpToLocation"
        placeholder="Jump to Location..."
        class="input is-large"
        >
      </gmap-autocomplete>
      <!-- <input class="input is-large" type="text" placeholder="Jump to Location..."> -->
    </div>
    <div class="control">
      <a class="button is-success is-large">
        Go!
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jumpToLocation (place) {
      console.log('Location has been changed!')
      var latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.$emit('locationChanged', latLng)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  /*background-color: aqua;*/
}
</style>
