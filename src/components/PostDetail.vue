<template lang="pug">
.card.py-3
  .card-body
    div(v-if="!isAdding")
      h3.card-title(v-if="!isEditing") {{ postDetail.title }}
      input(v-else type="text" v-model="postEditTitle" @keyup.enter="sendEditPost")
      p {{ postDetail.body }}
    
    div(v-if="isAdding" class="addContentContainer")
      label(for="postAddTitle") Title
      input(type="text" v-model="postAddTitle")
      label(for="postAddBody") Body
      input(type="text" v-model="postAddBody")

  button(@click="editPost" type="button" class="btn btn-warning" v-if="!isEditing && !isAdding") Edit Title
  button(@click="sendEditPost" type="submit" class="btn btn-primary" v-if="isEditing && !isAdding") Send
  button(@click="sendAddPost" type="submit" class="btn btn-primary" v-if="isAdding") Send
</template>

<script>
import  { api } from '@/services/index.js';
export default {
  name: 'PostDetail',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    action: {
      type: String
    }
  },
  data() {
    return {
      postDetail: {},
      isEditing: false,
      isAdding: false,
      postAddTitle: '',
      postAddBody: '',
    }
  },
  created() {
    this.getPostDetail();
    if(this.action === 'addPost') {
      this.isAdding = true;
    }
  },
  methods: {
    goToPost() {
      this.$emit('goToPost')
    },
    async getPostDetail() {
      await api.get('/posts/' + this.id).then((response) => {
        this.postDetail = response.data
      })
    },
    editPost() {
      this.isEditing = true;
    },
    async sendEditPost() {
      let body = {
        title: this.postEditTitle
      }
      await api.put('/posts/' + this.id, body).then((response) => {
        console.log(response.data);
        alert('Post Edited!')
      })
    },
    async addPost() {
      let body = {
        title: this.postAddTitle,
        body: this.postAddBody,
        userId: 1,
      }
      await api.post('/posts/', body).then((response) => {
        console.log(response.data);
        alert('Post Added!')
      })
    }
  }
}
</script>

<style lang="scss">

a {
  line-height: 1rem;
  margin-right: 15px;
  cursor: pointer;
}

h5 {
  cursor: pointer;
}

.addContentContainer {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
}
</style>