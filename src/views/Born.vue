<template>
  <div class="app-container">
    <h1 style="color: #131313; font-weight: 400; font-size: 32px">
      Hi! What is your birthday?
    </h1>
    <span style="color: #b1b1b1"
      >Collect birthday will be acceptable maybe you want get some gift from your friend</span
    >
    <div class="section-content">
      <el-date-picker v-model="time" type="datetime" style="width:300px" placeholder="select your birth date">
      </el-date-picker>
    </div>
    <div class="bot-section">
      <span style="color: #b1b1b1;margin-bottom:10px; align-items: center;">Yes {{sex}}</span>
      <el-button
        style="background-color: chartreuse; width: 150px"
        block
        @click="nextStep"
        >NEXT</el-button
      >
    </div>
  </div>
</template>
<script>
import router from "../router/index";
export default {
  data() {
    return {
      time: "",
      sex: ""
    };
  },
  mounted(){
    this.sex=window.localStorage.getItem("sex")
  },
  created() {},
  methods: {
    nextStep() {
      window.localStorage.setItem("birthday", new Date(this.time).toLocaleString());
      router.push("/header");
    },
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
.bot-section{
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
