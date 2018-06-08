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
  <section class="comments">
    <header class="comments__header">
      <h2 class="comments__heading">{{comments.length}} comments</h2>
    </header>
  <ul>
    <li class="list__item" v-for="(comment, index) in comments" :key="index">
      <figure class="comments__author">
        <img class="comments__author-image" src="http://via.placeholder.com/50x50" alt="comment's author photo">
        </figure>
    <div class="comments__wrapper">
      <p class="comments__text">
        {{comment.body}}
      </p>
      <a class="button" :href="'mailto:'+ comment.email">Reply</a>
    </div>
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
import axios from 'axios';
import consts from '@/core/consts';

export default {
  name: 'Article',
  props: ['id', 'title', 'body', 'image'],
  data() {
    return {
      comments: null
    };
  },
  methods: {
    getData: function(config) {
      return axios(config);
    }
  },
  created() {
    axios(
      this.getData({method: consts.GET, url: consts.COMMENTS_URL}).then(
        response => {
          this.comments = response.data.filter(
            comment => comment.postId === this.id
          );
        },
        error => console.log(error)
      )
    );
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/typography.scss';
@import '@/styles/button.scss';

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
  max-height: 50rem;
}

.article__title {
  margin: 1rem 0 2rem 0;
}

.article__text {
  line-height: 1.6;
  color: lighten($text, 25%);
}

.comments {
  margin: 5rem 0 0 0;
}

.comments__text {
  color: lighten($text, 35%);
  line-height: 1.3;
  display: inline-block;
  margin: 0 0 1.5rem 0;
}

.comments__heading {
  color: lighten($text, 25%);
}

.comments__header {
  margin: 0 0 1.75rem 0;
  padding: 0 0 0.75rem 0;
  border-bottom: 0.1rem solid lighten($dark, 95%);
}

.comments__author {
  margin: 0 1.5rem 0 0;
}

.comments__author-image {
  border-radius: 50%;
}

.list__item {
  padding: 0 0 2rem 0;
  margin: 0 0 1rem 0;
  display: flex;
  &:not(:last-child) {
    border-bottom: 0.1rem solid lighten($dark, 95%);
  }
}

.button:after {
  display: none;
}
</style>
