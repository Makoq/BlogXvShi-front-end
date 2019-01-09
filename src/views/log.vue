<template>
  <div  class="logdiv">
     <el-container class="logcontainer">
         <el-row class="row">
             <el-col :span="9"><div >&nbsp;</div></el-col>
             <el-col :span="6">
                  <el-card class="logcard">
                      <el-row class="formrow">
                           <el-form label-position="left" label-width="100px" :model="formdata">
                                <el-form-item label="Username:"  >
                                    <el-input v-model="formdata.username" placeholder="please inout username.."></el-input>
                                </el-form-item>
                                <br>
                                <el-form-item label="Password:"  >
                                    <el-input v-model="formdata.password" placeholder="please inout password.."></el-input>
                                </el-form-item>                        
                            </el-form>
                      </el-row>
                      <br>
                      <el-row  style="width:100%" >
                          <el-col :span="1"><div style="100%">&nbsp;</div></el-col>
                          <el-col :span="22">
                               <!-- <div style="100%">&nbsp;</div> -->
                             <el-button style="width:100%;background-color:rgb(61, 212, 250)">login</el-button> 
                          </el-col>
                          <el-col :span="7">
                                  <div style="100%">&nbsp;</div>
                          </el-col>
                          <!-- <el-col :span="4">
                          </el-col> -->
                      </el-row>
                      <el-row style="width:100%">
                          <el-col :span="20"><div style="100%">&nbsp;</div></el-col>
                           <el-col :span="4"><router-link to="/registe">registe</router-link></el-col>
                      </el-row>
                </el-card>
             </el-col>
                <el-col :span="9"><div style="100%">&nbsp;</div></el-col>
         </el-row>
          
     </el-container>
  </div>
</template>
<script>
export default {
    data(){
      return{
        formdata:{
            username:'',
            password:''
        }
      }
    },
    mounted(){
        console.log("123");
        
    }

};
</script>
<style>
html{
    height: 100%;
}
body{
    height: 100%;
    margin: 0px;
}
.logdiv{
    height: 100%;
}
 .logcontainer{
     padding: 0px;
        height: 100%;
        min-height:100%;
     background: url(../assets/img/headerbk.jpg) no-repeat;
 background-size: cover;
 }
 .logcard{
     height: 300px;
    width: 100%;
    /* position:absolute;
    margin-left: 500px; */
    border: 5px rgb(61, 212, 250) solid;
    border-top: 40px rgb(61, 212, 250) solid;
    border-bottom: 40px rgb(61, 212, 250) solid;
 }
 .row{
     margin-top: 10%;
     width:100%;
 }
 .formrow{
     margin-top: 30px;
     margin-left: 20px;
     margin-right: 20px;
 }
 .formrow label{
     font-size: 15px;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     font-weight:bold;
 }
</style>