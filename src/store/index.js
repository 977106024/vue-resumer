import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"
Vue.use(Vuex)

process.noDeprecation = true
export default new Vuex.Store({
  state: {
    selected:'profile',
    user:{
      id:'',
      username:''
    },
    	resume:{
    		config:[
    			{field:'profile',icon:'id'},
    			{field:'workHistory',icon:'work'},
    			{field:'education',icon:'book'},
    			{field:'projects',icon:'heart'},
    			{field:'awards',icon:'cup'},
    			{field:'contacts',icon:'phone'},
    		],
    		profile:{
    			name:'吴柏宏',
    			city:'武汉',
    			title:'前端工程师',
    			birthday:'1994.07'
    		},
    		workHistory: [
            { company: '武汉齐峰', contents: `seo优化`},
            { company: '复仇者联盟', contents: `保存地球`},

          ],
          education: [
            { school: '加里敦', content: '吃喝玩乐' },
            { school: '热血高校', content: '文字' },
          ],
          projects: [
            { name: '非官方网易云音乐', contents: '歌曲播放、歌词滚动、搜索曲库' },
            { name: 'todolist', contents: '登陆注册、数据保存' },
          ],
          awards: [
            { name: 'awards A', content: '文字' },
            { name: 'awards B', content: '文字' },
          ],
          contacts: [
            { contact: 'phone', content: '18071525633' },
            { contact: 'qq', content: '977106024' },
          ],
    	}
  },
  mutations: {

    switchTab(state,payload){
    	state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    initState(state,payload){
      Object.assign(state,payload)
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    },
    removeUser(state){
      state.user.id=null
    },
    //暂时想到这种
    removeList(state,payload){
      let {subitem,i} = payload;
      switch(subitem){
        case 'workHistory':
          state.resume[subitem].splice(i,1)
          break;
        case 'education':
          state.resume[subitem].splice(i,1)
          break;
        case 'projects':
          state.resume[subitem].splice(i,1)
          break;
        case 'awards':
          state.resume[subitem].splice(i,1)
          break;
        case 'contacts':
          state.resume[subitem].splice(i,1)
          break;
      }
      localStorage.setItem('state', JSON.stringify(state))
    },
    addList(state,payload){
      switch(payload){
        case 'workHistory':
          state.resume[payload].push({ company: '', contents: ``})
          break;
        case 'education':
          state.resume[payload].push({ school: '', content: '' })
          break;
        case 'projects':
          state.resume[payload].push({ name: '', contents: '' })
          break;
        case 'awards':
          state.resume[payload].push({ name: '', content: '' })
          break;
        case 'contacts':
          state.resume[payload].push({ contact: '', content: '' })
          break;
      }
      localStorage.setItem('state', JSON.stringify(state))
    }

  }
})
