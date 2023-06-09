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
      <div class="etichetta-genere" v-else>
        <span>Film e serie di tutti i generi</span>
      </div>
      <div class="film-wrapper">

        <div v-for="film in store.filmAndSerieBox" :key="film.id">
          <SingleFilm :filmObj="film"/>
        </div>
      </div>
      

    </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

.container {
  overflow-x: auto;
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
.etichetta-genere{
      background-color: rgba(216, 112, 147, 0.5);
      height: 50px;
      width: 400px;
      display: inline-block;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      text-transform: uppercase;
      color: $bg-color;
      font-weight: bolder;
    }

  .film-wrapper{
    display: flex;
    overflow: auto;
    width: 100%;
    overflow-y: hidden;
    scrollbar-width: thin;
    scrollbar-color: gray lightgray;

  }
   
  .film-wrapper::-webkit-scrollbar {
  height: 8px;
}

.film-wrapper::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 4px;
}

.film-wrapper::-webkit-scrollbar-track {
  background-color: lightgray;
  border-radius: 4px;
}

</style>
