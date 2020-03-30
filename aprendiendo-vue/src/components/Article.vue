<template>
  <div id="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap" v-if="article.image">
            <img :src="url + 'get-image/' + article.image" :alt="article.title" />
          </div>

          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment('from', 'now')}}</span>
          <p>{{article.content}}</p>

          <div class="clearfix"></div>

          <router-link :to="'/editar-articulo/' + article._id" class="btn btn-warning">Modificar</router-link>
          <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
        </article>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import swal from "sweetalert";

export default {
  name: "Article",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: null
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(id) {
      axios.get(this.url + "article/" + id).then(res => {
        if (res.data.status == "Success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(id) {
      swal({
        title: "¿Estas seguro?",
        text: "Una vez eliminado el articulo no podrás recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios
            .delete(this.url + "article/" + id)
            .then(() => {
              swal(
                "Articulo Eliminado",
                "El articulo se ha eliminado correctamente",
                "success"
              );
              this.$router.push("/blog");
            })
            .catch(error => {
              swal("Error", "El articulo no ha podido ser eliminado", "error");
              console.log(error);
            });
        } else {
          swal("Articulo no eliminado");
        }
      });
    }
  }
};
</script>