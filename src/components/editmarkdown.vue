<template>
  <div  >


 
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
              <el-menu-item index="/album"><label>Video</label></el-menu-item>
              <el-menu-item index="/editmarkdown"><label>Editblog</label></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
 


    <el-card >
        <el-row>
          <el-col :span="23">
              <el-input v-model="blogtheme" placeholder="请输入标题"></el-input>
          </el-col>
          <el-col :span="1">
               <el-button @click="submit()" style="height:60px;background-color:litered">submit</el-button>
          </el-col>
        </el-row>
             
             
        
    </el-card>

    <el-card class="editorcard" >
         <div  >
               <mavon-editor :ishljs = "true" v-model="blogcontent"></mavon-editor>
                <!-- <vue-markdown v-html="blogcontent"></vue-markdown> -->
        </div>
    </el-card>
     

    
 

  </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
            return{
                     
                     blogcontent:'',
                     blogtheme:'',
                      
                }
               
    }, 
    store,
    methods:{
      submit(){
        
       let data={theme:this.blogtheme,blog:this. blogcontent}

        // let data=new FormData()
        // data.append("theme",this.blogtheme)
        // data.append("blog",this.blogcontent)


        let config={
           headers: {
                      'Content-Type': 'application/json'
           }
        }

        console.log(data)
        this.$axios.post("http://localhost:8081/save",data,config)
        .then(res=>{
          console.log("res=>",res)

            if(res.status==200){
            this.$message('博客发布成功');
            this.$router.push({path:'/home'})
          }
        })
        

        
        // this.$store.commit('updatablogdata',this.value)
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