<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/crear-articulo" class="btn btn-success">Crear artículo</router-link>
    </div>
    <div id="nav-search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el articulo que buscas</p>
      <form @submit.prevent="search">
        <input type="text" name="search" v-model="searchString" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return{
      searchString: null
    }
  },
  methods: {
    search(){
      this.$router.push("/redirect/" + this.searchString);
    }
  }
};
</script>