<script>
import AppSearch from './AppSearch.vue'

export default {
  name: 'AppHeader',
  props: ['msg'],
  components: {
    AppSearch
  }
}

</script>

<template>
  <header>
    <div class="container d-flex justify-content-between">
      
      <h1>{{ msg }}</h1>
      <AppSearch @cercafilm="$emit('cercafilm')"/>

    </div>
  </header>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;
header {
  background-color: $bg-color-element;
  h1 {
    text-transform: uppercase;
    color: $color-title;
  }
}
</style>
