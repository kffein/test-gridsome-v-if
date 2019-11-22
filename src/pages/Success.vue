<template>
  <Layout :class="`page layout-${layout}`">
    <h1 class="title">Success page</h1>
    <p>we use v-show (unwanted though) no bug, this page is red if desktop / blue if mobile, directly on load</p>

    <div v-show="layout==='mobile'">
      <p v-text="'Our layout is mobile'"></p>
    </div>
    <div v-show="layout==='desktop'">
      <p v-text="'Our layout is desktop'"></p>
    </div>

  </Layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      layout: 'layout',
    }),
  }
}
</script>