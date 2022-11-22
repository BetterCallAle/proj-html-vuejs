import { reactive } from "vue";

export const store = reactive({
   // Articles data
    allArticles:[],
    articles: [],
    tutorialArticles: [],
    featured: null,
    review: null,
   // Footer menu data
   popular: [],
   recent: [],
   latest:[]
})