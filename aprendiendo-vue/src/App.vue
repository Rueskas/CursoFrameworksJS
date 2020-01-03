<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <div class="center">
      <LastArticles></LastArticles>
      <Sidebar></Sidebar>
        <div class="clearfix"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Sidebar from "./components/Sidebar.vue";
import LastArticles from "./components/LastArticles.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Slider,
    Sidebar,
    LastArticles,
    Footer
  }
};
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import "./assets/css/style.css";
</style>
