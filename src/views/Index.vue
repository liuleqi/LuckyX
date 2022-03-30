<template>
  <div>
    <el-form>
      <el-form-item label="username">
        <el-input type="text" placeholder="please input your username" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input type="password" placeholder="please input your password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">Login</el-button>
    <el-button type="primary" @click="register">Register</el-button>
  </div>
</template>
<script>
import router from '../router/index'

export default {
  
  data(){
    return{
      form:{
        username: ''
      }
    }
  },
  created(){
  },
  methods:{
    login(){
      let arr=this.localGet("userList")||[]
      if(this.form.username==='admin'&&this.form.password==='123456'){
        window.localStorage.setItem("sex","man")
        window.localStorage.setItem("birthday",new Date().toLocaleString())
        window.localStorage.setItem("username","admin")
        window.localStorage.setItem("header","./header/head09.jpeg")
        
      }
      else{
        if(arr.length!==0){
          let item =arr.find((e)=>{
            return this.form.username===e.username&&this.form.password===e.password
          })
          window.localStorage.setItem("sex",item.sex)
          window.localStorage.setItem("birthday",item.birthday)
          window.localStorage.setItem("username",item.username)
          window.localStorage.setItem("headerUrl",item.headerUrl)
        }else{
          this.$message.error("error,please register first")
        }
        
      }
      router.push("/rtc")
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
    register(){
      router.push("/login")
    }
  }
}
</script>