<script>
import { store } from '../store';
import 'bootstrap-icons/font/bootstrap-icons.css';
import errorImage from '../assets/img/404-image.jpg';

export default {
  name: 'SingleFilm',
  props: {
    filmObj: Object 
  },
  data() {
    return {
      store,
      flip: false,
    }
  },
  methods: {
    flagURLmounter(inizioUrl, linguaFilm, fineURL) {
      let basicURL = inizioUrl;
      let lingua = linguaFilm;
      if (lingua === 'en') {
        lingua = 'us';
      } else if (lingua === 'es') {
        lingua = 'sp';
      } else if (lingua === 'pt') {
        lingua = 'po';
      }
      basicURL += `${lingua}${fineURL}`;
      return basicURL;
    },
    imageError(event) {
      event.target.src = errorImage;
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
      let votoDiviso = Math.ceil(parseFloat(this.filmObj.vote_average) / 2);
      return votoDiviso;
    }
  },
}
</script>
<template>
  <div class="scheda">
    <div class="card" :class="flip ? 'flip' : ''" @mouseenter ="flip = true" @mouseleave="flip = false">
      <div class="front">
        <div :class="filmObj.title ? 'etichetta film' : 'etichetta serie'">
          <span>{{ filmObj.title ? 'FILM' : 'SERIE TV' }}</span>
        </div>
        <img class="img-fluid mb-3" :src="coverMounter(store.imageURL, store.imageW500 , filmObj.poster_path)" @error="imageError" :alt="filmObj.original_language">
      </div>
      <div class="back">
        <ul>
          <li>
            <div class="flag">
              <img :src="flagURLmounter(store.flagURL, filmObj.original_language, store.flagIMG)" @error="imageError" :alt="filmObj.original_language">
            </div>
          </li>
          <li>
            <span><strong>Titolo: </strong></span>
            <span>{{ filmObj.title ? filmObj.title : filmObj.name }}</span>
          </li>
          <li>
            <span><strong>Titolo originale: </strong></span>
            <span>{{ filmObj.original_title ? filmObj.original_title : filmObj.original_name }}</span>
          </li>
          <li>
            <span><strong>Voto: </strong></span>
            <span class="yellow" v-for="i in votedStars" :key="i"><i class="bi bi-star-fill"></i></span>
            <span class="yellow" v-for="i in 5 - votedStars" :key="i"><i class="bi bi-star"></i></span>
          </li>
          <li>
            <span><strong>Overview: </strong></span>
            <span>{{ filmObj.overview ? filmObj.overview : 'In attesa...' }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">


@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.scheda {
  width: 200px;
  padding: 10px;
  // float: left;
  height: 280px;
  

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    transform-origin: center;
    border: 3px solid white;

    &.flip {
      transform: rotateY(180deg);
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    .front {
      color: white;
      .etichetta {
        position: absolute;
        top: 5px;
        left: 0;
        background-color: coral;
        padding: 5px 10px;
        font-size: 12px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .film {
        background-color: olivedrab;
      }

      .serie {
        background-color: orangered;
      }
    }

    .back {
      transform: rotateY(180deg);
      overflow: auto;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(46, 46, 46);
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: white;
      font-size: 12px;
      .yellow{
        color: yellow;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          margin-bottom: 10px;
          .flag{
            width: 55px;
            height: 35px;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          span:first-child {
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
