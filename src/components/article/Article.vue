<template>
<div>article
  <router-link v-bind:to="{name: 'ArticleList'}">Home</router-link>
  <p>{{body}}</p>
  <ul>
    <li v-for="(comment, index) in comments" :key="index">
      <p>
        {{comment.body}}
      </p>
      <a :href="'mailto:'+ comment.email">{{comment.email}}</a>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  props: ['id', 'body'],
  data() {
    return {
      comments: null
    }
  },
  created() {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/comments'
    }).then(
      response => {
        this.comments = response.data.filter(
          comment => comment.postId === this.id
        )
      },
      error => console.log(error)
    )
  }
}
</script>

<style scoped>
</style>
