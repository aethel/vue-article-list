<template>
  <article class="article-teaser">
    <figure class="article-teaser__image">
      <img :src="imgUrl" />
    </figure>
    <div class="article-teaser__wrapper">
    <header class="article-teaser__header">
      <h3 class="article-teaser__heading">
        <slot name="teaserTitle">Loading title</slot>
      </h3>
    </header>
    <p class="article-teaser__body">
      <slot name="teaserBody">Loading body</slot>
    </p>
    <slot name="teaserLink">Loading link</slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleTeaser',
  props: ['imgUrl'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.article-teaser {
  display: flex;  
}

.article-teaser__image {
  margin: 0 1.5rem 0 0;
}

.article-teaser__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-teaser__heading {
  max-height: 7.5rem;
  text-transform: capitalize;
  overflow: hidden;
}

.article-teaser__body {
  margin-bottom: 1rem;
  line-height: 1.3;
}
</style>

