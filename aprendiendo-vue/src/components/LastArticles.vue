<template>
  <section id="content">
    <h2 class="subheader">Últimos articulos</h2>
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="../assets/images/paisaje.jpg" alt="paisaje" />
        </div>

        <h2>Articulo de prueba</h2>
        <span class="date">Hace 5 min</span>
        <a href="#">Leer más</a>
        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
    name: 'LastArticles'
};
</script>