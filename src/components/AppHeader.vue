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
  height: 60px;

//  
  h1 {
    font-size: 25px;
    text-transform: uppercase;
    color: $color-title;
    line-height: 60px;
    vertical-align: middle;
  }
}
</style>
