import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlay:false,
    lastCardId:3,
    lastListId:5,
    currentData:null,
    lists:[{
      id: 1,
      name: "list #1",
    },
    {
      id: 2,
      name: "list #2",
    },
    {
      id: 3,
      name: "list #3",
    }],
    cards: [
    {
      listId: 1,
      id: 1,
      name: "card 1",
    },
    {
      listId: 2,
      id: 2,
      name: "card 2",
    },
    {
      listId: 3,
      id: 3,
      name: "card 3",
    }]

  },
  mutations: {
    toggleOverlay(state){
      state.overlay=!state.overlay
    },
    delete(state,payload){
      const index = state.cards.findIndex(x => x.id === payload.id)
      state.cards.splice(index,1)
    },
  openForm(state, payload) {
    state.currentData = payload;
  },
  saveCard(state, payload) {
    state.cards = state.cards.map((card) => {
      if (card.id === payload.id) {
        return Object.assign({}, card, payload);
      }
      return card;
    });
  }
  },
  actions: {
  }
})
