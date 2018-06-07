<template>
<div>
 <ul class="list" v-if="articles.length">
   <li class="list__item" v-for="(article, index) in articles" :key="index" v-if="index <= limit">
     <article class="article">
       <header>
         <article-teaser>
           <template slot="teaserTitle">
             {{article.title}}
           </template>
           <template slot="teaserBody">
             {{article.body}}
           </template>
           </article-teaser>
         <h3 class="article__heading">
          <!-- {{article.title}} -->
         </h3>
       </header>
       <!-- <p class="article__teaser">{{article.body}}</p> -->
     </article>
     <router-link v-bind:to="{name: 'Article', query: {id: article.id, body: article.body}}">Read more</router-link>
   </li>
 </ul>

</div>
</template>

<script>
import axios from 'axios'
import ArticleTeaser from '@/components/articleTeaser/ArticleTeaser'

export default {
  name: 'ArticleList',
  components: {
    'article-teaser':ArticleTeaser
  },
  data () {
    return {
      articles: '',
      limit: 10
    }
  },
  mounted () {
    axios({
      method: 'GET',
      'url': 'https://jsonplaceholder.typicode.com/posts'
    }).then(response => {
      this.articles = response.data
    }, error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .list__item {
    outline: 1px solid pink;
  }
</style>
