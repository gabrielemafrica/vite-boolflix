<script>
import { handleError } from 'vue';
import { store } from '../store';

export default {
  name: 'SingleFilm',
  props: {
    filmObj: Object 
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    flagURLmounter(inizioUrl, linguaFilm, fineURL) {
      let basicURL = inizioUrl;
      let lingua = linguaFilm;
      // lingua === 'en' ? lingua = 'us' : lingua = lingua;
      if (lingua === 'en') {
        lingua = 'us';
      } else if (lingua === 'es') {
        lingua = 'sp';
      } else if (lingua === 'pt') {
        lingua = 'po';
      }
      basicURL +=  `${lingua}${fineURL}`;
      return basicURL;
    },
    imageError(event) {
      event.target.src = "https://sametozsuleyman.com.tr/wp-content/uploads/2019/06/en-guzel-404-sayfalar.jpg";
    }
  }
}

</script>

<template>
  <div>
  <span>{{ filmObj.title ? 'questo è un FILM' : 'questa è una SERIE' }}</span>
  </div>
  <span>Titolo</span>
  <h4>
    {{ filmObj.title }}
    {{ filmObj.title ? filmObj.title : filmObj.name }}
  </h4>
  <span>Titolo Originale</span>
  <h4>
    {{ filmObj.original_title }}
    {{ filmObj.original_title ? filmObj.original_title : filmObj.original_name}}
  </h4>
  <span>Lingua</span>
  <h4>
    {{ filmObj.original_language }}
  </h4>
  <div class="flag">
   <img class="img-fluid mb-3" :src="flagURLmounter(store.flagURL, filmObj.original_language, store.flagIMG)" @error="imageError" :alt="filmObj.original_language">
  </div>
  
  <span>Voto</span>
  <h4>
    {{ filmObj.vote_average }}
  </h4>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

.flag{
  width: 100px;
}
span{
  color: yellowgreen;
}
</style>
