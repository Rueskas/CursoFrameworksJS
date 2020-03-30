<template>
  <section id="articles-component">
    <div id="general" v-if="articles && articles.length > 0">
      <Slider texto="Bienvenido al curso en frameworks para Javascript" home="true"></Slider>
      <div class="center">
        <section id="content">
          <h2 class="subheader">Últimos articulos</h2>
          <div id="articles" v-if="articles">
            <Articles :articles="articles"></Articles>
          </div>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
      </div>
    </div>
    <div v-else-if="articles && articles <= 0">
      No hay articulos para mostrar
    </div>
    <div v-else>
      Cargando...
    </div>
  </section>
</template>
<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";
import Global from "../Global";

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  data() {
    return {
      url: Global.url,
      articles: null
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then(res => {
        if (res.data.status == "Success") {
          this.articles = res.data.articles;
          console.log(res.data.articles);
          console.log(this.articles);
        }
      });
    }
  },
  mounted() {
    this.getLastArticles();
  }
};
</script>