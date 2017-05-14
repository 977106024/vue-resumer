<template>
<div id="ResumeEditor">
	<nav>
		<ol>
			 <li v-for="(item,index) in resume.config"
			 :class="{active: item.field === selected}"
			 @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
			</li>
		</ol>
	</nav>
	 <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input v-show="key !='contents'" type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
              <textarea v-show="key=='contents'" rows="1" cols="20" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)"></textarea>
            </div>
            <hr>
            <div class="btn">
             <a href="#" class="rem" @click.prevent="remList(item.field,i)">删除</a>
            </div>
          </div>
          <div class="btn">
           <a href="#" class="add" @click.prevent="addList(item.field)">添加</a>
          </div>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}  </label>
          <input type="text" :value='value' @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
      </li>
    </ol>

</div>
</template>

<script>
export default {
  name: 'ResumeEditor',

  computed:{

    selected:{
      // return this.$store.state.selected
      get () {
        return this.$store.state.selected
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
    resume () {
      return this.$store.state.resume
    }
  },
  methods:{
    changeResumeField(path,value){
      this.$store.commit('updateResume',{
        path,
        value
      })
    },
    addList(subitem){
      this.$store.commit('addList',subitem)
    },
    remList(subitem,i){
      this.$store.commit('removeList',{
        subitem:subitem,
        i:i
      })
    }
  }
};

</script>

<style lang="scss" scoped>
  #ResumeEditor{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav{
      width: 80px;
      background: black;
      color: white;
      > ol {
        > li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active{
            background: white;
            color: black;
          }
        }
      }
    }
    > .panels{
    	flex-grow:1;
    	>li{
    		padding:24px;
    	}
    }
    svg.icon{
      width: 24px;
      height: 24px;
    }
  }
  ol{
    list-style: none;
    overflow:auto;
  }
  .resumeField{
  	>label{
  		display:block;
  	}
  	input[type=text]{
  		margin:20px 0;
  		border:1px solid #ddd;
  		box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
  		width:100%;
  		height:40px;
  		padding:0 8px;
  	}
  textarea{
    margin:20px 0;
    border:1px solid #ddd;
    box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
    width:100%;
    height:40px;
    padding:0 8px;
    transition:0.3s;
  }
  textarea:focus{
    height:10em;
    transition:0.5s
  }
  }
  .btn{
    text-align: center;

    >.rem{
        background:#FF6347;
     }
  >.rem:hover{
     color:#000;
     background:red;
     transition: 0.5s;
   }
    >.add{
        background:#00BFFF;
     }
  >.add:hover{
     color:#000;
     background:deepskyblue;
     transition: 0.5s;
   }
  }
.btn > a{
  display: inline-block;
  color:#fff;
  padding:5px;
  margin:5px;
  text-decoration: none;
}


</style>
