export default {
  state(){
    return {
      count: 0,
      layout: computeLayout(),
      viewport: computeViewport(),
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    resize(state){
      state.layout = computeLayout();
      state.viewport = computeViewport();
    }
  },
  actions:{
    INIT({commit}, isClient=false){
      if (process.isServer) return;
      window.addEventListener('resize', () => {
        commit('resize');
      });
      commit('resize');
    }
  },
  getters:{
    count: ({ count }) => count,
    layout: ({ layout }) => layout,
    viewport: ({ viewport }) => viewport,
  }
}

/** 
 * compute our layout based on viewport
 * - desktop if >=600
 * - mobile if <600
 * 
 * server build always mobile layout
*/
function computeLayout() {
  if (process.isClient && document.body.offsetWidth >= 600) {
    return 'desktop';
  }
  return 'mobile';
}

/**
 * compute our viewport
 * and default to an iphoneX if we are on the server
 * since we do not have access to `window`
 */
function computeViewport(){
  return {
    width: process.isServer ? 375 : document.body.offsetWidth,
    height: process.isServer ? 812 : window.innerHeight,
  }
}