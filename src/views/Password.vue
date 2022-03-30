<template>
  <div class="app-container">
    <h1>What is your Password:</h1>
    <el-input
      style="margin-top: 5px; width: 500px"
      type="Password"
      placeholder="Please set up your password"
      v-model="text"
    ></el-input>
    <el-button style="margin-top: 5px" @click="next"
      >Start your journey</el-button
    >
  </div>
</template>
<script>
import router from "../router/index";

export default {
  data() {
    return {
      text: "",
      headerUrl: window.localStorage.getItem("header"),
    };
  },
  created() {
    this.pushUser();
  },
  methods: {
    next() {
      let arr = this.localGet("userList") || [];
      arr.push({
        sex: window.localStorage.getItem("sex"),
        headerUrl: window.localStorage.getItem("header"),
        username: window.localStorage.getItem("username"),
        zoomLink: window.localStorage.getItem("zoomLink"),
        birthday: window.localStorage.getItem("birthday"),
        password: this.text,
      }),
        this.localSet("userList", arr);
      router.push("/rtc");
    },
    localGet(key) {
      const value = window.localStorage.getItem(key);
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (error) {
        return value;
      }
    },

    localSet(key, value) {
      console.log("这里是存储token");
      console.log(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  },
};
</script>
<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/bg/bg.jpg");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 30px 30px #ffffff inset;
}
</style>
