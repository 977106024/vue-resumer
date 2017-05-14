<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
          <span class="close" @click="close">x</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  export default{
    name:'MyDialog',
    props:['title','visible'],
    methods:{
      close(){
        this.$emit('close')
      }
    }
  }


</script>

<style scoped lang="scss">
  .wrapper{
    position:fixed;
    background:hlsa(0,0%,0%,0.25);
    background-color:rgba(255,255,255,0.8);
    top:0;
    bottom:0;
    left: 0;
    right:0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog{
    background:white;
    min-width:10em;
    min-height:4em;
    >header{
       padding:16px;
       display: flex;
       justify-content: space-between;
       background:#ccc;
     }
     >main{
        padding:16px;
        background:#ccc;
      }
  }
  .close{
    cursor: pointer;
  }

</style>
