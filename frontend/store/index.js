import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store ({
    state: function() {
      return {
        message: 'This is store message!',
        counter: 0,
        atackmessage: '主人公の攻撃',
      }
    },
    // stateに定義してある値を直接書き換えるのは良くない。
    mutations: {
      count: function(state, obj) {
        state.message =obj.message;
        state.counter += obj.add;
      },
      reset: function(state) {
        state.counter = 0;
      },
      atack: function(state, obj) {
        state.atackmessage = obj.atackmessage;
      },
    },
  })
}

export default createStore
