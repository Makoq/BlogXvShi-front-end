<template>
  <div  >


 
        
 
    <el-header>
      <my-header/>
    </el-header>

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
  import myHeader from '@/components/common/header';
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

    },components:{
      myHeader
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