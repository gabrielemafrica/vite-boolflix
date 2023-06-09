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
      
      <div class="info-ricerca">
        <span>
          La tua ricerca:
        </span>
        <span>
          {{store.searchText ? store.searchText : store.searchTextBase}}
        </span>
      </div>

      <div class="no-results" v-if="store.filmAndSerieBox.length == 0">
        <h3>nessun risultato trovato</h3>
      </div>

      <div v-for="film in store.filmAndSerieBox" :key="film.id">
        <SingleFilm :filmObj="film"/>
      </div>
      

    </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

.container {
  .info-ricerca {
    width: 50%;
    margin: 30px auto;
    text-align: center;
    span{
      font-size: 30px;
    }
    span:last-child{
      text-decoration: underline;
      text-transform: uppercase;
    }
  }
  .no-results{
    text-align: center;
    text-transform: uppercase;
    margin-top: 80px;
    color: lightsalmon;
    h3{

      font-weight: lighter;
      text-decoration: underline;
    }
  }
}

</style>
