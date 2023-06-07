<script>

export default {
  name: 'SingleFilm',
  props: {
    filmObj: Object 
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
  <span>Voto</span>
  <h4>
    {{ filmObj.vote_average }}
  </h4>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
@use '../styles/general.scss' ;

</style>
