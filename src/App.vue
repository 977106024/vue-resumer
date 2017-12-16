
<template>
  <div>
    <div id="page">
      <header>
        <!-- <Topbar></Topbar> -->
      </header>
      <main>
        <ResumeEditor></ResumeEditor>
        <ResumePreview></ResumePreview>
      </main>
    </div>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'

import Topbar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

import icons from './assets/icons'
import store from './store/index'

import AV from './lib/AVkey'
import getAVUser from './lib/getAVUser'

export default {
  name: 'app',
  components:{
    Topbar,
    ResumeEditor,
    ResumePreview,
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
    this.$store.commit('setUser',getAVUser())
  },
  store
}
</script>

<style lang="scss">

#page {
  position: relative;
  min-width:1024px;
  padding-top: 80px;
  display: flex;
  flex-direction:column;
  background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513365772491&di=375fe042fc354fdce3de34f3d239d1aa&imgtype=0&src=http%3A%2F%2Ftxt22262.book118.com%2F2017%2F0428%2Fbook102915%2F102914823.jpg);
  background-repeat:no-repeat;
  background-size: cover;
  >main{
    flex-grow:1;
  }
  >header{
    // min-width: 1024px;
    // max-width: 1440px;
  }
  >main{
    min-width: 1024px;
    max-width: 1440px;
    // margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    // width: 100%;
    // align-self: center;
  }
}
#ResumeEditor{
  min-width: 45%;
  // background: #444;
}
#ResumePreview{
  background: #777;
  flex-grow: 1;
  margin-left:80px;
}
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
