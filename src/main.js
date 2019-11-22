// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex';
import store from '~/store';

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store(store);

  // init to compute ome base states (viewport stuff)
  appOptions.store.dispatch('INIT')

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
