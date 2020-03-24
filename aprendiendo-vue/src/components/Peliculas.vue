<template>
  <div id="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>
        <h2 id="favorita" v-if="this.favorita">La pelicula favorita es: <strong>{{this.favorita.title}}</strong></h2>
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <Pelicula :pelicula="pelicula" 
            @favorita="mostrarFavorita"></Pelicula>
          </div>
        </div>
        <div class="misdatos">
          <p v-html="mostrarDatos"></p>
          <br/>
          <p> {{this.web | mayusculas | concatYear}}</p>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Pelicula from "./Pelicula.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  data() {
    return {
      nombre: 'Rueskas',
      web: 'https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js',
      favorita : null,
      peliculas: [
        {
          title: "Harry Potter",
          year: 2002,
          image: "https://i.ytimg.com/vi/CKt0PQFECfs/maxresdefault.jpg"
        },
        {
          title: "El Risas",
          year: 2019,
          image: "https://i.blogs.es/d0ea1e/joker-joaquin-phoenix/450_1000.jpg"
        },
        {
          title: "Spiderman",
          year: 2000,
          image:
            "https://www.infobae.com/new-resizer/XkfkqIeQ16c2-lbWKdS7OFcbWoY=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/16142656/Spiderman.jpg"
        }
      ]
    };
  },
  methods: {
    mostrarFavorita(favorita){
      this.favorita = favorita;
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasModificadas = this.peliculas;
      console.log(peliculasModificadas);
      for(var i = 0 ; i < peliculasModificadas.length ; i++){
          peliculasModificadas[i].title = peliculasModificadas[i].title.toUpperCase();
      }
      return peliculasModificadas;
    },
    mostrarDatos(){
      return '<strong>Nombre:</strong> ' + this.nombre + '<hr/><strong>Sitio Web:</strong> ' + this.web;
    }
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    },

    concatYear(value){
      var date = new Date();
      return value + ' - ' + date.getFullYear();
    }
  }
};
</script>