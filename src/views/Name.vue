<template>
  <div class="app-container">
    <h1>What is your name?</h1>
    <img
        :src="headerUrl"
        style="width: 100px; height: 100px; border-radius: 50%"
        alt=""
      />
    <el-input style="margin-top:5px;width:500px" type="text" placeholder="please enter your name" v-model="text"></el-input>
    <el-button style="margin-top:5px" @click="next">next</el-button>
  </div> 
</template>
<script>
import router from "../router/index"
export default {
  data(){
    return {
      text:"",
      headerUrl : window.localStorage.getItem("header")
    }
  },
  methods:{
    next(){
      window.localStorage.setItem("username",this.text)
      router.push("/zoom")
    }
  }
}
</script>
<style scoped>
.app-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/bg/bg3.png');
  background-size:100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:0 0 30px 30px #ffffff inset;
}
</style>