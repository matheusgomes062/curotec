<template lang="pug">
.card(style='width: 18rem;')
  .card-body
    div
      h5.card-title {{ postDetail.title }}
      p {{ postDetail.body }}
</template>

<script>
import  { api } from '@/services/index.js'
export default {
  name: 'PostDetail',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      postDetail: {}
    }
  },
  created() {
    this.getPostDetail();
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
  }
}
</script>

<style lang="scss">

a {
  line-height: 1rem;
}

h5 {
  cursor: pointer;
}

</style>