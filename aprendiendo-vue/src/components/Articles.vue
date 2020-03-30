<template>
  <div id="list-articles">
    <article class="article-item" v-for="article in articles" v-bind:key="article._id">
      <div class="image-wrap">
        <img :src="url +'get-image/' + article.image" :alt="article.title" v-if="article.image" />
        <img src="../assets/images/default.png" :alt="article.title" v-if="!article.image" />
      </div>

     <h2> <router-link :to="{name: 'article', params: {id: article._id}}"> {{article.title}} </router-link></h2>
      <span class="date">{{article.date | moment("from", "now") | capitalize}}</span>
      <router-link :to="{name: 'article', params: {id: article._id}}">Leer más</router-link>
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
import Global from '../Global'
export default {
  name: "Articles",
  props: ["articles"],
  data (){
      return {
          url: Global.url
      }
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>