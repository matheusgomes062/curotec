<template lang="pug">
div
  Post(v-for="item in posts"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    @goToPostDetails="goToPostDetails($event)"
    v-if="!isPostDetail")
  PostDetail(v-if="isPostDetail" :id="postDetailId")
</template>

<script>
import Post from '@/components/Post.vue'
import PostDetail from '@/components/PostDetail.vue'
import  { api } from '@/services/index.js'

export default {
  name: 'Home',
  components: {
    Post,
    PostDetail,
  },
  data() {
    return {
      posts: [],
      isPostDetail: false,
      postDetailId: null
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      await api.get('/posts').then((response) => {
        this.posts = response.data
      })
    },
    goToPostDetails(id) {
      this.postDetailId = id;
      this.isPostDetail = true;
    }
  }

}
</script>

<style>

</style>