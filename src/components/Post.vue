<template lang="pug">
.card(style='width: 18rem;')
  img.card-img-top(src='...' alt='...')
  .card-body
    h5.card-title Card title
    p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
    a.btn.btn-primary(href='#') Go somewhere
</template>

<script>
export default {
  name: 'Post',
  props: {
    propC: {
      type: String,
      required: true
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>