<template>
  <div class="app-container">
      <h1>Please enter your personal zoom link:</h1>
    <el-input style="margin-top:5px;width:500px" type="text" placeholder="Insert your zoom ID" v-model="text"></el-input>
    <el-button style="margin-top:5px" @click="next">To the Password</el-button>
    
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
      window.localStorage.setItem("zoomLink",this.text)
      router.push("/password")
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
  background-image: url('/bg/bg.jpg');
  background-size:100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:0 0 30px 30px #ffffff inset;
}

</style>