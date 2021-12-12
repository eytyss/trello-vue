<template>
  <div >
    <Overlay/>
    <Popup/>
      <div class='list-wrapper'>
        <div class='list-able'>
          <div class="list-card" v-for="(list,index) in lists" :key="index">
            <div class="list-header">{{list.name}}</div>
            <div class='list-content'>
                <CardsList :list="list"/>
            </div>
          </div>
        </div>
        <input type="text"
        class="input-new-list"
        v-model="namelist"
        placeholder="Create a list"
        @keyup.enter="creater"
        >
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import CardsList from "../components/CardList.vue"
import Popup from "../components/Popup.vue"
import Overlay from "../components/Overlay.vue"


export default {
	name: 'page',
  data(){
    return {
      namelist:""
    }
  },
  components:{
        CardsList,
        Popup,
        Overlay
  },
    computed:{
      ...mapState(["lists","cards","overlay"])
    },
    methods:{
      creater(){
        if (this.namelist != ""){
          this.$store.state.lastListId++
          this.$store.state.lists.push({
            id: this.$store.state.lastListId,
            name: this.namelist
          })
          this.namelist = "";
        }
      }
    },
}
</script>

<style>
body {
  padding:0;
  margin:0;

}

.list {
    display: flex;

}
.list_wrap {
        text-align: center;
}


.list-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 100vw;
  height: 100vh;
  padding: 20px;
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.ghost {
  opacity: 0.5;
}

.list-able {
  display: flex;
  gap: 20px;
}

.input-new-list {
  display: flex;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(235, 236, 240, 0.5);
  min-width: 260px;
  border:none;
  outline: none;
}

.input-new-list::placeholder {
  color: white;
}

.list-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: auto;
}

.list-header {
  position: relative;
  display: flex;
  justify-content: center;
  word-break: break-all;
  align-items: center;
  min-width: 280px;
  max-width: 280px;
  line-height: 50px;
  padding: 0px 10px 0px 10px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 10px 10px 0px 0px;
  color: rgba(24, 43, 77, 1);
  user-select: none;

}

.list-content {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-width: 280px;
  height: auto;
  background-color: rgba(235, 236, 240, 1);
  padding: 0px 10px 0px 10px;
  box-shadow: 1.5px 1.5px 1.5px 0.1px rgba(255, 255, 255, 0.1);
  color: rgba(24, 43, 77, 1);
  border-radius: 0px 0px 5px 5px;
}

.list-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 0px 0px 10px 10px;
  color: white;
  border-top: 0.5px solid rgba(255, 255, 255, 0.25);
  padding: 0px 10px 10px 10px;
}

</style>