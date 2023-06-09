<script>
import { store } from '../store';
import SingleFilm from './SingleFilm.vue';


export default {
  name: 'ListFilms',
  components: {
    SingleFilm
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  
    <div class="container">
      
     
      <div v-for="film in store.filmAndSerieBox" :key="film.id">
        <SingleFilm :filmObj="film"/>
      </div>
      

    </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

</style>
