<template>
  <Layout :class="`page layout-${layout}`">
    <h1 class="title">Error page</h1>
    <p>we use v-if so bug : if loaded directly in a desktop viewport, page is blue (layout = mobile)</p>

    <div v-if="layout==='mobile'">
      <p v-text="'Our layout is mobile'"></p>
    </div>
    <div v-if="layout==='desktop'">
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
      viewport: 'viewport',
    }),
  }
}
</script>