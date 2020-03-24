<template>
  <div id="general">
    <Slider   ></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de prueba</h2>
        <h3>{{id_desde_url}}</h3>
        <h4>{{this.nombre}}</h4>
        <button @click="mayusNombre">Mayusculas</button>
        <button @click="minusNombre">Minusculas</button>
        <hr />
        <button @click="redirigirAlBlog">Ir al blog</button>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Pagina",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "rueskas"
    };
  },
  methods: {
    mayusNombre() {
      this.nombre = this.nombre.toUpperCase();
    },
    minusNombre() {
      this.nombre = this.nombre.toLowerCase();
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    }
  },
  components: {
    Sidebar,
    Slider
  }
};
</script>