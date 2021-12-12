<template>
  <div class='cardList'>
        <p  v-for="(card,index) in fild(list)" :key="index" >
              <span @click="toggle(card)">{{card.name}} </span> <button class="btn-delete" @click="del(card)">X</button>
        </p>
        <div class="list-footer"><input class="input-card" @keyup.enter="addCard(listName)" v-model="listName" type="text"></div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: 'cardList',
    props:["list"],
   data(){
      return {
          listName: ""
      }
    },
    computed:{
      ...mapState(["lists","cards"])
    },
    methods:{
      del(id){
        this.$store.commit("delete",id)
      },
      fild(list){
          return this.cards.filter( item => item.listId == list.id)
      },
      addCard(name) {
        if (name.length > 0) {
          this.$store.state.lastCardId++;
          let card = {
            listId: this.list.id,
            id: this.$store.state.lastCardId,
            name: name
          };

          this.cards.push(card);
          this.listName = ''
        }
        },
        toggle(data){
          const currentData = {
              listId: this.list.id,
              listName: this.list.name,
              id: data.id,
              name: data.name,
            };
          this.$store.commit("toggleOverlay")
          this.$store.commit("openForm", currentData);
      }

    }
}
</script>

<style>
.input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 80%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  word-break: break-all;
  font-size: 16px;
  outline: none;
  border:none

}
.btn-delete{
  background: inherit;
  border:none;
  font-weight:bold
}

</style>