<template>
  <div id="app">
     123
     <router-view/>
  </div>
</template>
<script>
export default {
 
  data () {
    return {
    }
    
  },
  mounted(){
      this.$router.push("/testchild")
  }
}
</script>
<style lang="scss">
 
</style>
