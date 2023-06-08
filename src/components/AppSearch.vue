<script>
import { store } from '../store';

export default {
  name: 'AppSearch',
  data() {
    return {
      store
    }
  },
}

</script>

<template>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="cerca il Film" aria-label="cerca il Film" aria-describedby="button-addon2" v-model="store.searchText" @keyup.enter="$emit('cercafilm')">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit('cercafilm')">Cerca</button>
  </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

div.input-group {
  width: 30%;
}

</style>
