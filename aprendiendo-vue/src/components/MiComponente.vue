<template>
  <div id="general">
    <Slider texto="Pagina de pruebas"></Slider>
    <div class="center">
      <section id="content">
        <hr />
        <h1 class="subheader">{{title}}</h1>
        <h2>{{subtitle}}</h2>
        <hr />

        <h2>REACTIVIDAD</h2>
        <input type="text" v-model="nombre" />
        <h3>
          Mi nombre es:
          <strong>{{nombre}}</strong>
        </h3>

        <h2>Directivas condicionales</h2>
        <input type="number" v-model="edad" />
        <h3>
          Mi edad es
          <strong>{{edad}}</strong>
        </h3>
        <p style="color: green; font-weight: bold;" v-if="edad && edad >= 18">Eres mayor de edad</p>
        <p style="color: red; font-weight: bold;" v-else-if="edad">Eres menor de edad</p>
        <p style="color: purple; font-weight: bold;" v-else>Introduce tu edad</p>

        <h2>DIRECTIVA ITERATIVA</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
export default {
  name: "MiComponente",
  components: {
    Sidebar,
    Slider
  },
  data() {
    return {
      title: "Mi componente",
      subtitle: "Soy el subtitulo",
      nombre: null,
      edad: null,
      peliculas: [
        "Harry Potter",
        "Spiderman",
        "Jurassic Park",
        "Malasaña",
        "El hoyo"
      ]
    };
  }
};
</script>