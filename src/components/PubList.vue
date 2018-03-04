<template>
  <nav class="publist panel">
    <!--
    <div class="panel-block">
      How many pubs?
    </div>
    <div class="panel-block">
      <div class="field has-addons has-addons-right">
        <div class="control">
          <a class="button is-primary" @click="pubLimit--">
            <b-icon icon="minus" pack="fas"></b-icon>
          </a>
        </div>
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="How many pubs?"
          :value="pubLimit"
          >
        </div>
        <div class="control">
          <a class="button is-primary" @click="pubLimit++">
            <b-icon icon="plus" pack="fas"></b-icon>
          </a>
        </div>
      </div>
    </div>
    -->
    <a
      class="panel-block"
      v-for="pub in publist"
      :key="pub.id"
      >
      <span class="panel-icon">
        <figure class="image is-16x16">
          <img :src="pub.icon" />
        </figure>
      </span>
      {{ pub.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'PubList',
  props: ['publist'],
  data () {
    return {
      pubLimit: 10
    }
  }
}
</script>

<style scoped>
* {
  /*background-color: magenta;*/
  /*min-height: 200px;*/
}
</style>
