<template>
  <div>
    <form @submit.prevent="signUp">
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
    name:'SignUpForm',
    data(){
      return {
        formData:{
          username:'',
          password:''
        },
        errorMessage:''
      }
    },
    created(){

    },
    methods:{
      signUp(){
        //ES6解构赋值
        let {username,password} = this.formData;
        var user = new AV.User();
        //设置注册的用户名和密码
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(()=> {
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
