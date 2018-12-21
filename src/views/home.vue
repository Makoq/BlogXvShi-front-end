<template>
  <div>
    <el-container>
      <el-header>
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
              <el-menu-item index="/home">home</el-menu-item>
              <el-menu-item index="/album">video</el-menu-item>
              <el-menu-item index="/editmarkdown">editmarkdown</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
          <el-row>
              <el-col :span="4">
                  <el-card class="homeaside">
                      <el-table
                      :data="tableData"

                      class="asidetable"

                      @cell-click="al"

                      >
                            <el-table-column prop="latest" label="最近的博客" style="width:80%"  >
                              
                            </el-table-column>

                            <!-- <el-table-column
                            prop="opera"
                            label=""
                            
                            >
                            <template slot-scope="scope">
                                <el-button @click=" te()" icon="el-icon-search" circle></el-button>
                               
                                
                               
                                 
                            </template>
                            </el-table-column> -->

                      </el-table>
                  </el-card>
              </el-col>
              <el-col :span="20">

                  <!-- <el-card class="homemain"> -->
                      <!-- :defaultOpen="preview" -->
                      <!-- ishljs代码高亮  -->
                      <!-- :editable="false"  -->
                       <mavon-editor  defaultOpen="preview"  :editable="false"  class="mkdeditor" :value="value"    :toolbarsFlag="false" :subfield="false"></mavon-editor>

                       <!-- <vue-markdown :source="value"></vue-markdown> -->
                  <!-- </el-card> -->
              </el-col>
          </el-row>


      </el-main>
    </el-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import store from '../vuex/store.js'
 
export default {
  data() {
    return {
         
        tableData:[  ],
        value:''

    };
  },
  store,
  components:{
        VueMarkdown // 声明组件
    },
    methods:{
        te(){
            
        },
        al(row, column, cell, event){
        
           console.log(row)
            //点击单元格，并将列表中的
           this.value=row.blogcontent;
        
        }
         
         
    },
    mounted:function(){
        this.$axios.get("http://localhost:8081/find")
            .then(response=>{
             if(response.status==200){
              return response.data
             }else{
                 console.log("error")
             }
                 
            }).then(response=>{
                // this.value=response[0].blog;
                //   response.forEach(({blog}) => {
                //       this.value=blog;
                //   });



                // console.log(response)
                this.value=response[0].blog;

                response.forEach((data) => {
                    //  this.tableData.push( 'latest')
                    //   this.tableData.push(':')
                        var obj={'latest':data.theme,'blogcontent':data.blog}
                        
                        this.tableData.push(obj)
                        

                });
                console.log(this.tableData)
                 
            })
          
        
        // console.log(this.$store.state.blogData)
        // this.value=this.$store.state.blogData;
    }
};
</script>

<style lang="scss">
.homeaside{
    height: 600px;
    //  s

}
.homemain{
    height: 900px;
//    background: url(../assets/img/homebk.jpg) no-repeat;
//     background-size: cover;
    background-color: #edf4ed;
}
.asidetable{
    width: 100%;
}
  
.v-note-wrapper.markdown-body.mkdeditor {
    height: 830px;
}

</style>
