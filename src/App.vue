<script>
import axios from 'axios';
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import ListFilms from './components/ListFilms.vue';

export default {
  components: {
    AppHeader,
    ListFilms
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {

      // compongo url
      // let searchURL = store.apriURLbase;
      let searchQuery;
      let searchURLSerie = store.apriURLbase;
      let searchURLFilm = store.apriURLbase;
      let stringKey = `?${store.searchKey}=${store.key}`;
      //cerca film
      searchURLFilm += store.cercaMovie;
      //cerca serie
      searchURLSerie += store.cercaSerie;
      //chiave
      searchURLFilm += stringKey;
      searchURLSerie += stringKey;

      //dove cerco e cosa cerco
      if (store.searchText !== '') {
        searchQuery = `&${store.searchWhere}=${store.searchText}`;
      }else{
        searchQuery = `&${store.searchWhere}=${store.searchTextBase}`;
  
      }
      console.log('cosa cerco', searchQuery);
      //creo le due query string
      searchURLFilm += searchQuery;
      searchURLSerie += searchQuery;

      //chamata per i film con funzione
      store.filmAndSerieBox = [];
      this.callAxios(searchURLFilm, 'filmBox', 'filmAndSerieBox');
      this.callAxios(searchURLSerie, 'serieBox', 'filmAndSerieBox');
    },
    callAxios(searchURL, storangeBOX, storangeTotal) {
      axios.get(searchURL)
      .then(res => {
        //individuo l'array esatto
        store[storangeBOX] = res.data.results;

        //aggiungo a raay totale
        store[storangeTotal].push(...store[storangeBOX])
        
        console.log('url chamato =>', searchURL);
        console.log(storangeBOX, store[storangeBOX]);
        console.log(storangeTotal, store[storangeTotal]);
      })
      // errori
      .catch(error => {
        console.log(error);
        console.error(error);
      })
    }
  },
  created() {
    this.getFilms();
  },
  mounted() {
    console.log('tutti', store.filmAndSerieBox);
    console.log('film', store.filmBox);
    console.log('serie', store.serieBox);
  }
}

</script>

<template>
  <AppHeader msg = "boolflix" @cercafilm="getFilms"/>
  <main>
    <ListFilms />
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;




</style>
