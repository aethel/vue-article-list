import Vue from 'vue'
import {mount} from '@vue/test-utils'
import ArticleList from '@/components/articleList/ArticleList'

describe('ArticleList.vue', () => {
  it('should exist', () => {
    const wrapper = mount(ArticleList);
    expect(wrapper.exists()).toBeTruthy();
  })

  it('should be Vue instance', () => {
    const wrapper = mount(ArticleList);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.exists()).toBeTruthy();
  })
})
