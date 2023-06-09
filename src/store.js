import { VueElement, reactive } from 'vue'

export const store = reactive(
  {

    apriURLesempio: "https://api.themoviedb.org/3/search/movie?api_key=e79a8c38f81ce11311a67bcfc17a1c9e&query=ritorno+al+futuro",
    apriURLbase: "https://api.themoviedb.org/3/search/",
    generiMovieURl: "https://api.themoviedb.org/3/genre/movie/list?api_key=e79a8c38f81ce11311a67bcfc17a1c9e&query=top",
    generiSerieURl: "https://api.themoviedb.org/3/genre/tv/list?api_key=e79a8c38f81ce11311a67bcfc17a1c9e&query=top",
    geberValue: 'all',
    arrayGeneri: [],
    cercaMovie: "movie",
    cercaSerie: "tv",
    searchKey: "api_key",
    key: 'e79a8c38f81ce11311a67bcfc17a1c9e',
    searchWhere: "query",
    searchText: "",
    searchTextBase: "disney",
    filmBox: [],
    serieBox: [],
    filmAndSerieBox: [],
    flagURL: "https://www.worldometers.info/img/flags/",
    flagIMG: "-flag.gif",
    flagErrorURL: "https://png.pngtree.com/thumb_back/fh260/background/20220509/pngtree-404-error-page-not-found-image_1345267.jpg",
    // immagini
    imageURL: "https://image.tmdb.org/t/p/",
    imageW500: "w500/",



  }
)