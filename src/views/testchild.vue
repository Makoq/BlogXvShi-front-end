<template>
  <div id="app">
     {{myDatas}}
     <br/>
     <el-col span="2">12</el-col>
      <el-col span="4" offset="18">3</el-col>
        
  </div>
</template>
<script>
export default {
   props:{
     myDatas:String
   },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
 
</style>