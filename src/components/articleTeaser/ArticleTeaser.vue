<template>
  <article class="article-teaser">
    <header>
      <h3 class="article-teaser__heading">
        <slot name="teaserTitle">Loading title</slot>
      </h3>
    </header>
    <figure>
      <img :src="imgUrl" />
    </figure>
    <p class="article-teaser__body">
      <slot name="teaserBody">Loading body</slot>
    </p>
  </article>
</template>

<script>
export default {
  name: 'ArticleTeaser',
  props: ['imgUrl'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.article-teaser__heading {
  max-height: 7.5rem;
}

.article-teaser__body {
  margin-bottom: 1rem;
  line-height: 1.3;
}
</style>

