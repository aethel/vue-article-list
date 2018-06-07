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
       </header>
     </article>
     <router-link v-bind:to="{name: 'Article', query: {id: article.id, body: article.body}}">Read more</router-link>
   </li>
 </ul>

</div>
</template>

<script>
import axios from 'axios'
import consts from '@/core/consts'
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
      'url': consts.POSTS_URL
    }).then(response => {
      this.articles = response.data
    }, error => console.log(error))
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/core.scss';
  
  .list {
    padding: 1rem;
  }

  .list__item {
    margin: 0 0 1.5rem 0;
    padding: 0 0 1.5rem 0;
    border-bottom: 0.1rem solid lighten($text, 75%);
  }
</style>
