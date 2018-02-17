<template>
  <div>
    <div>{{ center }}</div>
    <gmap-map
      :center="center"
      :zoom="16"
      style="width: 100%; height: 500px"
    >

    <gmap-circle
      :center="center"
      :radius="100"
      :draggable="true"
      :editable="true"
    />

    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: ['center'],
  data () {
    return {
      // center: {
      //   lat: 52.836168,
      //   lng: -6.9304605
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: green;
}
</style>
