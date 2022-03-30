<template>
  <div class="app-container">
    <h1 style="color:#131313;font-weight:400">Great! Please choose your profile photo</h1>
    <span style="color:#b1b1b1">A lovely profile picture will benefit you from making a new friend</span>
    <div class="img-grid">
      <div @click="selectHeader(item)" class="grid-item" v-for="(item,index) in List" :key="index">
        <img style="width:100px;height:100px;border-radius:50%" :src="item" alt="header">
      </div>
    </div>
    <div class="bot-section">
      <el-button
        style="background-color: #5ad3ce"
        block
        @click="nextStep"
        >next step</el-button
      >
    </div>
  </div>
</template>
<script>
import router from "../router/index"
export default {
  data() {
    return {
      List: [
        "./header/head01.jpeg",
        "./header/head02.jpeg",
        "./header/head03.jpeg",
        "./header/head04.jpeg",
        "./header/head05.jpeg",
        "./header/head06.jpeg",
        "./header/head07.jpeg",
        "./header/head08.jpeg",
        "./header/head09.jpeg"
      ],
    };
  },
  created() {},
  methods: {
    selectHeader(str){
      this.$message.success("you choose a picture")
      window.localStorage.setItem("header",str)
    },
    nextStep(){
      router.push('/name')
    }
  },
};
</script>
<style scoped>
h1 {
  font-size: 48px;
}
.app-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.section-content {
  margin-top: 160px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.content-section {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bot-section {
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img-grid{
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  align-items: center;
  justify-content: center;
}
.grid-item{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
