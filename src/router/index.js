import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/articleList/ArticleList'
import Article from '@/components/article/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: 'article',
      name: 'Article',
      component: Article,
      props (route) {
        return route.query || {}
      }
    }
  ]
})
