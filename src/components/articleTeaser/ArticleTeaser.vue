<template>
  <article class="article-teaser">
    <header>
      <h3 class="article-teaser__heading">
        <slot name="teaserTitle">Loading title</slot>
      </h3>
    </header>
    <p class="article-teaser__body">
      <slot name="teaserBody">Loading body</slot>
    </p>
  </article>
</template>

<script>
export default {
  name: 'ArticleTeaser',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.article-teaser__heading {
  // font-family: $highlight-font;
  // font-size: 1.3rem;
}
</style>

