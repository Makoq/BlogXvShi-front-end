<template>
  <div  >


 
        <el-row>
          <el-col :span="2">
           <img src="../assets/img/logotitle.png" style="margin:10px"> 
          </el-col>
          <el-col :span="22">
            <el-menu
              
              class="el-menu-demo"
              mode="horizontal"
              text-color="white"
              active-text-color="#4ebee3"
              router
            >
              <el-menu-item index="/welcome">Welcome</el-menu-item>
              <el-menu-item index="/album">album</el-menu-item>
              <el-menu-item index="/home">home</el-menu-item>
              <el-menu-item index="/editmarkdown">editmarkdown</el-menu-item>
              <!-- <el-menu-item @click="submit(value)">finishedit</el-menu-item> -->
            </el-menu>
          </el-col>
        </el-row>
 


    <el-card >
        <el-row>
          <el-col :span="23">
              <el-input v-model="inp" placeholder="请输入标题"></el-input>
          </el-col>
          <el-col :span="1">
               <el-button @click="submit()" style="height:60px;background-color:litered">submit</el-button>
          </el-col>
        </el-row>
             
             
        
    </el-card>

    <el-card class="editorcard" >
         <div  >
               <mavon-editor  v-model="value"></mavon-editor>
        </div>
    </el-card>
     

    
 

  </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
            return{
                     
                     value:'sdsds',
                     blogname:'',
                     inp:''
                }
               
    }, 
    store,
    methods:{
      submit(){
        this.$router.push({path:'/home'})
        this.$store.commit('updatablogdata',this.value)
      }

    }
  
};
</script>
<style >
body{
    margin: 0;
    background-color: #000;
}

 
 .el-card{
     margin: 10px;
 }
  .el-input__inner{
      height: 60px;
      border-color:crimson;
  }
  .editorcard{
      height: 700px;
  }
 .markdown-body{
        height: 660px;
  }

</style>