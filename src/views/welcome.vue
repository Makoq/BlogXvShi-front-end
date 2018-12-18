<template>
  <div  >
    <!-- <el-card style="height:100px">
        <marquee>   😉😁</marquee>
    </el-card> -->
   <el-card class="homecard">
       <el-row>
         <!-- <el-col :span="4">
           <el-card class="headpic">
              <img src="../assets/img/headpic.jpg" style="height:100%;width:100%;border-radius:40px">
           </el-card>

         </el-col> -->
         <el-col :span="24">
            <el-card class="introducecard">
                <h1>旭氏美术馆</h1>  
                <p>旭氏美术馆源于我的一个突发奇想，那是在考研之后的一段日子里，每每经历大考之后，从繁忙而且苦逼的日子里突然闲下来，心里莫名会很难受，突然不知道要做些什么
                  但心态还有当时备考考研状态的惯性，不知道要做什么，却又想要做些什么，于是，我捡起了多年前的一个小兴趣--画画。
                </p>
                <p>也由此，开始画了很多张画，某一天突发奇想，想到了旭氏美术馆这个名字。
                </p>
                <p>旭氏美术馆自从诞生以来，鉴证了我很多张美术作品，渐渐地，我总会在心情低落的时候画一张，或者晚上一个人思绪万千睡不着的时候画一张，
                  又或者会在一周工作以后难得休息时画一张，然后我慢慢的从中汲取到了许多我未预见到的很多感受，比如说慰藉，比如说成就感，又或者说是一点点鼓励，总之我很感谢
                  我的生命赋予我这样一件美好的事情，让我沉浸其中，让我乐此不疲。
                </p>
                <p>我认为，人的一生要经历很多事情，而年轻的时候，找到自己发自内心想要做并且能很好发挥天赋的事情十分重要，我认为那样才能更好的实现生命的意义，
                  所以我现在仍然在寻求值得我一生去做并且能做出价值的工作，出于人生充满的各种意外，虽然我目前做的是一份和美术几乎不相干的工作，但是我还是很认同我画画的天赋，我也不想
                  就这样把我这点天赋扔掉，所以，也是机缘巧合，我决定建立这个网站。
                </p>
                <p>感谢每一位到访本站的朋友。
                </p>
                 <p>最后，愿我们一切都好。
                </p>

            </el-card>
         </el-col>

       </el-row>

       <el-row>
         
       </el-row>

   </el-card>
 

  </div>
</template>
<script>
export default {
    data(){
      return{
        value:'21212'

      }

    }
  
};
</script>
<style>
.homecard{
  height: 600px;
  background-color: #f0f3f5;
}
.headpic{
  height: 200px;
  width: 80%;

}
.introducecard{
  height: 500px;
  width: 98%;
    background-color:#edf4ed;
  color: black;
}
.introducecard p{

  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei";
}
 
</style>
