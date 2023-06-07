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
      let searchURL = store.apriURLbase;
      //cerca film
      searchURL += store.cercaMovie;
      //chiave
      searchURL += `?${store.searchKey}=${store.key}`;
      //nome
      if (store.searchText !== '') {
        searchURL += `&${store.searchWhere}=${store.searchText}`;
      }else{
        searchURL += `&${store.searchWhere}=${store.searchTextBase}`;
      }

      axios.get(searchURL)
      .then(res => {
        store.filmBox = res.data.results;
        console.log(searchURL);
        console.log(store.filmBox);
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
