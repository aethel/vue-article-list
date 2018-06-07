<template>
<div class="article">
<article class="article__content" >
  <router-link v-bind:to="{name: 'ArticleList'}">Home</router-link>
  <header>
    <h1 class="article__title">{{title}}</h1>
    <figure>
      <img class="article__image" :src="image"/>
    </figure>
  </header>
  <p class="article__text">{{body}}</p>
  <section class="article__comments">
  <ul>
    <li v-for="(comment, index) in comments" :key="index">
      <p>
        {{comment.body}}
      </p>      
      <a :href="'mailto:'+ comment.email">Reply</a>
    </li>
  </ul>
  </section>
</article>
 <div class="sidebar">
    <p>This is the sidebar</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import consts from '@/core/consts'

export default {
  name: 'Article',
  props: ['id', 'title', 'body', 'image'],
  data() {
    return {
      comments: null
    }
  },
  methods: {
    getData: function(config) {
      return axios(config)
    }
  },
  created() {
    axios(
      this.getData({ method: consts.GET, url: consts.COMMENTS_URL }).then(
        response => {
          this.comments = response.data.filter(
            comment => comment.postId === this.id
          )
        },
        error => console.log(error)
      )
    )
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/typography.scss';

.article {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 2rem;
  border: 0.1rem solid lighten($dark, 90%);
  background: $bright;

  @media screen and (max-width: 60rem) {
    .article__content,
    .sidebar {
      grid-column: 1 / span 5;
    }
  }
}

.article__content {
  grid-column: 1 / span 3;
}

.sidebar {
  grid-column: span 1;
  padding: 2rem;
}

.article__image {
  max-width: 100%;
  width: 100%;
  margin: 0 0 2.5rem 0;
}

.article__title {
  margin: 1rem 0 2rem 0;
}

.article__text {
  line-height: 1.6;
}
</style>
