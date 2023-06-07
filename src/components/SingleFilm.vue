<script>
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
      }
      basicURL +=  `${lingua}${fineURL}`;
      return basicURL;
    }
  }
}

</script>

<template>
  <span>Titolo</span>
  <h4>
    {{ filmObj.title }}
  </h4>
  <span>Titolo Originale</span>
  <h4>
    {{ filmObj.original_title }}
  </h4>
  <span>Lingua</span>
  <h4>
    {{ filmObj.original_language }}
  </h4>
  <div class="flag">
   <img class="img-fluid mb-3" :src="flagURLmounter(store.flagURL, filmObj.original_language, store.flagIMG)" onerror="this.onerror=null;this.src='https://png.pngtree.com/thumb_back/fh260/background/20220509/pngtree-404-error-page-not-found-image_1345267.jpg'; " :alt="filmObj.original_language">
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
</style>
