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
    			name:'姓名',
    			city:'城市',
    			title:'标题?',
    			birthday:'生日'
    		},
    		workHistory: [
            { company: '神盾局', contents: `我的第一份工作是保护地球
				2.啊实打实大
				3.啥时打算打算
				4.啊实打实大`},
            { company: '复仇者联盟', contents: `我的第二份工作是毁灭地球
            2.
            3.
            4.`},

          ],
          education: [
            { school: '加里敦', content: '吃喝玩乐' },
            { school: '热血高校', content: '文字' },
          ],
          projects: [
            { name: 'project A', contents: '文字' },
            { name: 'project B', contents: '文字' },
          ],
          awards: [
            { name: 'awards A', content: '文字' },
            { name: 'awards B', content: '文字' },
          ],
          contacts: [
            { contact: 'phone', content: '13812345678' },
            { contact: 'qq', content: '12345678' },
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
    //暂时想到这种笨办法..= =
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
