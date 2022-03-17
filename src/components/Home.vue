<template lang="pug">
div.container-md
  div(class="title")
    h1(@click="isPostDetail = false") Posts APP
  button(@click="addPost" type="button" class="btn btn-primary") Add Post
  
  Post(v-for="item in posts"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    @goToPostDetails="goToPostDetails($event)"
    v-if="!isPostDetail")

  PostDetail(v-if="isPostDetail" :id="postDetailId" :action="action")
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
      postDetailId: null,
      action: null
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
      this.action = '';
    },
    addPost() {
      this.isPostDetail = true;
      this.action = 'addPost';
    }
  }

}
</script>

<style>
.title {
  display: flex;
  justify-content: center;
}

h1 {
  cursor: pointer;
}

</style>