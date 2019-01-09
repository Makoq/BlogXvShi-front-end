<template>
  <div >
    
   <el-header>
        <el-row>
          <!-- <el-col :span="2">
            <img src="../assets/img/logotitle.png" style="width:100%"> 
          </el-col> -->
          <el-col :span="24">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              text-color="white"
              active-text-color="#4ebee3"
              router
            ><el-menu-item index="/welcome" ><label>旭氏美术馆</label> </el-menu-item>
              <el-menu-item index="/welcome"><label>Welcome</label></el-menu-item>
              <el-menu-item index="/home"><label>Home</label></el-menu-item>
              <el-menu-item index="/map"><label>Map</label></el-menu-item>
              

              <el-menu-item index="/album"><label>Video</label></el-menu-item>
              <el-menu-item index="/editmarkdown"><label>Editblog</label></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>


  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        activeIndex:'/welcome'
    }
  }
}
</script>
<style lang="scss">
 .el-header {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 200px;
  background-color: #191b1d;
  box-shadow: #191b1d 50px;
}
.el-menu {
  left: 0;
  /* background-color: #191b1d; */
   background: url(../../assets/img/headerbk.jpg) no-repeat;
 background-size: cover;
  width: 100%;
}
.el-menu-item {
  font-size: 22px;
  font-family: -webkit-pictograph;
}
</style>
