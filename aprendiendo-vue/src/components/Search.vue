<template>
  <div id="general">
    <Slider :texto="'Busqueda: ' + textSearch"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader" v-if="articles">Articulos Encontrados</h2>
        <div id="articles" v-if="articles">
          <Articles :articles = articles></Articles>
        </div>
        <div v-else>
            <h2>No hay articulos que coincidan con tus busqueda</h2>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global" 
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue"

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.textSearch = this.$route.params.search;
    this.getArticlesBySearch(this.textSearch);
  },
  data() {
    return {
      url: Global.url,
      articles: null,
      textSearch: null
    };
  },
  methods: {
    getArticlesBySearch(search) {
      axios.get(this.url + "search/" + search).then(res => {
        console.log(res);

        if (res.data.status == "Success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>