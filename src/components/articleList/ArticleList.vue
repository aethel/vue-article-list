<template>
<div class="article-list">
 <ul class="list" v-if="articles.length">
   <li class="list__item" v-for="(article, index) in articles" :key="index" v-if="index <= limit">
     <article class="article">
       {{article.thumbnailUrl}}
       <header>           
         <article-teaser :imgUrl="article.thumbnailUrl">
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
  <div class="sidebar">
    <p>This is the sidebar</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import consts from '@/core/consts'
import ArticleTeaser from '@/components/articleTeaser/ArticleTeaser'

export default {
  name: 'ArticleList',
  components: {
    'article-teaser': ArticleTeaser
  },
  methods: {
    getData: function(config) {
      return axios(config)
    }
  },
  data() {
    return {
      articles: [],
      limit: 10
    }
  },
  mounted() {
    const vm = this
    axios
      .all([
        this.getData({ method: 'GET', url: consts.POSTS_URL }),
        this.getData({ method: 'GET', url: consts.IMAGES_URL })
      ])
      .then(
        axios.spread(function(posts, images) {
        posts.data.forEach((value,key) => {
            value = Object.assign({},value, images.data[key])
            vm.articles.push(value);
          });
        })        
      ).catch(error => console.log(error))
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/core.scss';

.article-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  max-width: 10.24rem;
  margin: 0 auto;

  .list {
    grid-column: 1 / span 3;
  }

  .sidebar {
    grid-column: span 1;
  }

  @media screen and (max-width: 60rem) {
    .list,
    .sidebar {
      grid-column: 1 / span 5;
    }
  }
}

.list {
  padding: 1rem;
}

.list__item {
  margin: 0 0 1.5rem 0;
  padding: 0 0 1.5rem 0;
  border-bottom: 0.1rem solid lighten($text, 75%);
}
</style>
