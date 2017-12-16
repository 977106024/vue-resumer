<template>

    <div id="topbar">
      <div class="wrapper">
        <span class="logo">Resumer</span>
        <div class="actions">
          <div v-if="logined" class="userActions">
            <span class="welcome">Hi!{{user.username}}</span>
            <a href="#" class="button" @click.prevent="signOut">登出</a>
          </div>
          <div v-else class="userActions">
            <a href="#" class="button primary" @click.prevent="signUpDialogVisible = true">注册</a>
            <a href="#" class="button" @click.prevent="signInDialogVisible = true">登录</a>
            <MyDialog title='注册' :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
              <SignUpForm @success="signIn($event)"></SignUpForm>
            </MyDialog>
            <MyDialog title='登录' :visible="signInDialogVisible" @close="signInDialogVisible=false">
              <SignInForm @success="signIn($event)"></SignInForm>
            </MyDialog>
          </div>
        </div>
      </div>
    </div>



</template>

<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from '../lib/AVkey'
export default {
  name: 'TopBar',
  components:{MyDialog,SignUpForm,SignInForm},
  data () {
    return {
      signUpDialogVisible:false,
      signInDialogVisible:false,

    };
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  methods:{
    signIn(user){
      //隐藏dialog
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      //将刚注册后的用户名密码保存到store里
      this.$store.commit('setUser',user)
    },
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    }
  }
};
</script>

<style lang="scss" scoped>
@media(min-width:900px){
  #topbar{
    width: 709px;
  }
}
#topbar{
	// margin:0 215px;
  min-width: 1024px;
  max-width: 1440px;
  position:absolute;
  top: 80px;
  left:181px;
	>.wrapper{
		// min-width:1024px;
		// max-width:1440px;
		margin:0 auto;
		height:64px;
		display: flex;
		justify-content: space-between;
		align-items:center;
		// padding:0 16px;
    padding-left: 45px;
    background:#fff;
  	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
			>.logo{
				font-size: 24px;
				color:#000;
			}
	}
}
.button{
	width:72px;
	height:32px;
	font-size:18px;
	color:#222;
	text-align:center;
	background:#ddd;
	cursor:point;
	border:none;
  text-decoration:none;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  vertical-align:middle;
	&:hover{
		box-shadow:1px 1px 1px hsla(0,0,0,0.50);
	}
	&.primary{
		background:#02af5f;
		color:#fff;
	}
}

.actions{
  display: flex;
  .userActions{
    margin-right:3em;
  }
  .welcome{
    margin-right:.5em;
  }
}
</style>
