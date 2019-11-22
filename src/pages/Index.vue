<template>
  <Layout :class="`page layout-${layout}`">
    <h1 class="title">Test page</h1>
    
    <section>
      <h2>current state</h2>
<pre>
count: {{count}}
layout: {{layout}}
viewport: {{viewport}}
</pre>
    </section>

    <section>
      <h2>Test our store</h2>
      <p>this button should increment counter
        <br>proof that our store is working</p>
      <button @click="$store.commit('increment')">increment : {{count}}</button>
    </section>

    <section>
      <h2>Test layout</h2>
      <p>We compute a layout  based on our current viewport (<code>document.body.offsetWidth</code>) :</p>
      <ul>
        <li><em>desktop</em> if >=600px -- <strong>BLUE PAGE</strong></li>
        <li><em>mobile</em> if viewport width less than 600px -- <strong>RED PAGE</strong></li>
      </ul>
      
      <div class="test">
        <h3>Now, we render compoent based on our viewport</h3>
        <div v-if="layout==='mobile'">
          <p v-text="'Our layout is mobile'"></p>
        </div>
        <div v-if="layout==='desktop'">
          <p v-text="'Our layout is desktop'"></p>
        </div>
      </div>


      <p>Because on build, we don't have access to <code>window</code>
        <br>this <code>layout</code> state is defaulted on an iphoneX viewport (375x812)
        <br>but, if we are on the browser (<code>document.body.offsetWidth</code>) we default it base on our actual viewport, and watch some resize to update it
        <br>
        <br><strong>Now, if we want to display components based on our viewport, we get some error</strong>
        <br><pre>DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method.</pre>
      </p>

      <h3>To reproduce the bug</h3>
      <ul>
        <li>load this page directly within a <strong>mobile layout</strong> everything is ok - page is blue, and no console error</li>
        <li>load this page directly within a <strong>desktop layout</strong> you'll get the error - page is still blue</li>
        <li>comment <code>.test</code> div and load this page directly within a <strong>desktop layout</strong> everything is ok - page is red, and no consoole error</li>
      </ul>
      
    </section>


  </Layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed:{
    ...mapGetters({
      count: 'count',
      layout: 'layout',
      viewport: 'viewport',
    }),
  }
}
</script>

<style scoped>
.page{
  padding: 20px;
}
.layout-desktop{
  background: rgba(255, 0,0, 0.2);
}
.layout-mobile{
  background: rgba(0, 0, 255, 0.2);
}

.test{
  padding: 20px;
  border: 2px solid;
}
</style>