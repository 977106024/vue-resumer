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
    background:rgb(241,239,224);
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
		margin-top: 10px;
    > nav{
      width: 80px;
      color: white;
			border-right: 1px solid #fff;
			background:rgb(32,33,38);
			z-index: 1;
      > ol {
        > li{
          height: 63px;
          display: flex;
          justify-content: center;
          align-items: center;
          // margin-top: 16px;
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
			margin:20px;
			margin-top: 20px;
			// background: #fff;
    	>li{
    		// padding:24px;
				.subitem{
					box-shadow: none;
				}
				.resumeField{
					background:#fff;
					padding: 0 12px;
					margin-bottom: 18px;
					box-shadow:1px 1px 5px rgba(0,0,0,0.4);
				}
				>div{

					>div{
						padding: 0 12px;
						margin-bottom: 18px;
						box-shadow:0 1px 3px 0 rgba(0,0,0,0.4);
					}
				}
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
			color: #000;
			padding-top: 20px;
  	}
  	input[type=text]{
  		margin:20px 0;
  		border:1px dashed rgb(0,192,145);
  		// box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
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
        background:rgb(0,192,145);
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
