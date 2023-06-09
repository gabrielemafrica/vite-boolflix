<script>
// import { handleError } from 'vue';
import { store } from '../store';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    },
    coverMounter(inizioUrl, dimensione, fineURL){
      let basicURL = inizioUrl;
      basicURL += dimensione;
      basicURL += fineURL;
      return basicURL;
    },
  },
  computed: {
    votedStars(){
      let votoDiviso = Math.ceil(parseFloat(this.filmObj.vote_average) / 2 );

      return votoDiviso;
    }
  },
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
  <div class="cover">
   <img class="img-fluid mb-3" :src="coverMounter(store.imageURL, store.imageW500 , filmObj.poster_path)" @error="imageError" :alt="filmObj.original_language">
  </div>
  
  <span>Voto</span>
  <h4>
    <span v-for="i in votedStars">
      <i class="bi bi-star-fill"></i>
    </span>
    <span v-for="i in 5 - votedStars">
      <i class="bi bi-star"></i>
    </span>
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
