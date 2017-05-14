<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username" required> <!--HTML5新属性required,
                                                                      规定必须在提交前填写此字段 -->
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/AVkey'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default{
    name:'SignInForm',
    data(){
      return {
        formData:{
          username:'',
          password:''
        },
        errorMessage:''
      }
    },
    methods:{
      signIn(){
        console.log('登录页')
        let {username,password} = this.formData
        //这里是吧登录功能和注册后的自动登录公用一个方法
        AV.User.logIn(username,password).then(()=> {
          this.$emit('success',getAVUser())
        }, (error)=> {
          this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }
</script>
<style scoped>
  label{
    text-align: center;
    display:inline-block;
    width:3em;
  }
</style>
