<template>
  <div id="app">
      <input type="text" v-model="data"/>
      <p>{{data}}</p>
     <router-view :myDatas="data"></router-view>
  </div>
</template>
<script>
export default {
 
  data () {
    return {
      data:'hello'
    }
    
  },
  mounted(){
      this.$router.push("/testchild")
  }
}
</script>
<style lang="scss">
 
</style>
