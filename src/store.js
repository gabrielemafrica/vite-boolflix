import { VueElement, reactive } from 'vue'

export const store = reactive(
  {

    apriURLesempio: "https://api.themoviedb.org/3/search/movie?api_key=e79a8c38f81ce11311a67bcfc17a1c9e&query=ritorno+al+futuro",
    apriURLbase: "https://api.themoviedb.org/3/search/",
    cercaMovie: "movie",
    cercaSerie: "tv",
    searchKey: "api_key",
    key: 'e79a8c38f81ce11311a67bcfc17a1c9e',
    searchWhere: "query",
    searchText: "",
    searchTextBase: "film",
    filmBox: []

  }
)