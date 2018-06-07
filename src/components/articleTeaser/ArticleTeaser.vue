<template>
<div>
<slot name="teaserTitle">
title
</slot>
<slot name="teaserBody">
bod
</slot>
</div>
</template>

<script>
export default {
  name: 'ArticleTeaser',
  data (){
    return { }
  }
}
</script>

<style lang="scss" scoped>

</style>

