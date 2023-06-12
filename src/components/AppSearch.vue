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
  <select class="form-mio" aria-label="Default select example" @change="$emit('genersearch')" v-model="store.generValue">
    <option selected>All</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>


  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="cerca il Film" aria-label="cerca il Film" aria-describedby="button-addon2" v-model="store.searchText" @keyup.enter="$emit('cercafilm')">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit('cercafilm')">Cerca</button>
  </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

div.input-group {
  width: 25%;
  line-height: 60px;
  vertical-align: middle;
  margin: 15px 0;
  .form-control, .btn-outline-secondary {
    height: 30px;
  }
  .btn-outline-secondary{
    line-height: 20px;
  }
}

.form-mio {
  height: 30px;
  width: 25%;
  line-height: 60px;
  vertical-align: middle;
  margin: 15px 0;
  text-align: center;
}

</style>
