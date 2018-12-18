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
              <el-menu-item index="/album">album</el-menu-item>
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
                      >
                            <el-table-column
                            prop="latest"
                            label="最近的博客"
                            style="width:200px"
                           
                            >
                             
                            </el-table-column>

                            <el-table-column
                            prop="opera"
                            label=""
                            
                            >
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click=" te()">go</el-button>
                                 
                            </template>
                            </el-table-column>

                      </el-table>
                  </el-card>
              </el-col>
              <el-col :span="20">
                  <el-card class="homemain">
                       <vue-markdown :source="value"></vue-markdown>
                  </el-card>
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
         
        tableData:[
            {
                latest:'十二新作'
            },
             {
                latest:'雪地里的糖'
            },
             {
                latest:'深夜作品'
            },
             {
                latest:'十二新作'
            },
        ],
        value:''

    };
  },
  store,
  components:{
        VueMarkdown // 声明组件
    },
    methods:{
        te(){
            alert("hello")
        }
    },
    mounted:function(){
        console.log(this.$store.state.blogData)
        this.value=this.$store.state.blogData;
    }
};
</script>

<style lang="scss">
.homeaside{
    height: 600px;
}
.homemain{
    height: 900px;
   
    background-color: #edf4ed;
}
.asidetable{
    width: 100%;
}
</style>
