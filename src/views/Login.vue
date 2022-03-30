<template>
  <div class="app-container">
    <h1 style="color:#131313;font-weight:400">Hi, what is your gender?</h1>
    <span style="color:#b1b1b1">Please choose your gender below!</span>
    <div class="section-content">
      <div @click="selectMan" class="content-section">
        <svg
          t="1646275460281"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2069"
          width="48"
          height="48"
        >
          <path
            d="M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212 212 95.1 212 212-95.1 212-212 212z"
            p-id="2070"
            fill="#1296db"
          ></path>
        </svg>
      </div>
      <div @click="selectWoman" class="content-section">
        <svg
          t="1646275479406"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2391"
          width="48"
          height="48"
        >
          <path
            d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8 0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9 7.3 9.4 15.2 18.3 23.7 26.9 8.5 8.5 17.5 16.4 26.8 23.7 39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z"
            p-id="2392"
            fill="#d4237a"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router/index.js";
export default {
  data() {
    return {};
  },
  methods: {
    selectWoman(){
      window.localStorage.setItem("sex","female")
      router.push("/born")
    },
    selectMan(){
      window.localStorage.setItem("sex","male")
      router.push("/born")
    }
  },
};
</script>
<style scoped>
h1{
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
</style>
