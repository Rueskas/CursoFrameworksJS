<template>
  <div id="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">{{ text }}</h1>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "HelloWorld",
  components: {
    Sidebar
  },
  data() {
    return {
      text: "Hola mundo desde componente"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
