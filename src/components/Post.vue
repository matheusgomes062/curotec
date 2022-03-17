<template lang="pug">
.card(style='width: 18rem;')
  .card-body
    div
      h5.card-title(@click="goToPostDetails") {{ title }}
</template>

<script>
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
    }
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