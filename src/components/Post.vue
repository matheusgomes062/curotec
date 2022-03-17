<template lang="pug">
.card
  .card-body.b-flex.row.justify-content-between.align-items-center
    div(@click="goToPostDetails")
      h5.card-title {{ title }}
    div
      div(class="option" @click.prevent="deletePost") delete
</template>

<script>
import  { api } from '@/services/index.js'
export default {
  name: 'Post',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goToPostDetails() {
      this.$emit('goToPostDetails', this.id)
    },
    async deletePost() {
      await api.delete('/posts/' + this.id).then((response) => {
        this.postDetail = response.data
        alert('Post Deleted!')
      })
    },
  }
}
</script>

<style lang="scss">

.option {
  line-height: 1rem;
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.card {
  margin: 20px 0;
  padding: 0 20px;
}

</style>