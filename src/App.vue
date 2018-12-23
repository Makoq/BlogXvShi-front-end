<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
body{
  height: 100%;
}
#app{
height: 100%;
min-height: 100%;
}
</style>
