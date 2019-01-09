<template>
  <div>
    <el-container>
      <el-header>
        <my-header/>
      </el-header>

      

      <el-main>
          <el-card class="enjoycard"  > 
                  <label style="color:white">🌟Welcome to Enjoy my art pieces,You can be an artist, too.</label> 
          </el-card>
        <section class="topsection">
          <!-- <el-card class="topcard"> -->
          <div class="block">
            <el-carousel height="350px" class="csl">
              <el-carousel-item class="carouselitem">
                <img src="../assets/img/cs01.png" style="height:600px;width:100%">
              </el-carousel-item>
              <el-carousel-item class="carouselitem">
                <img src="../assets/img/csl02.png" style="height:600px;width:100%">
              </el-carousel-item>
              <el-carousel-item class="carouselitem">
                <img src="../assets/img/csl03.png" style="height:600px;width:100%">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- </el-card> -->
        </section>
        <section>
          <el-card class="welcard">
               <h1 style="text-align:center">🎨旭氏美术馆</h1>  
               <p style="line-height:40px">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;旭氏美术馆源于我的一个突发奇想，那是在考研之后的一段日子里，每每经历大考之后，从繁忙而且苦逼的日子里突然闲下来，心里莫名会很难受，突然不知道要做些什么
                  但心态还有当时备考考研状态的惯性，不知道要做什么，却又想要做些什么，于是，我捡起了多年前的一个小兴趣--画画。
              也由此，开始画了很多张画，某一天突发奇想，想到了旭氏美术馆这个名字。
                旭氏美术馆自从诞生以来，鉴证了我很多张美术作品，渐渐地，我总会在心情低落的时候画一张，或者晚上一个人思绪万千睡不着的时候画一张，
                  又或者会在一周工作以后难得休息时画一张，然后我慢慢的从中汲取到了许多我未预见到的很多感受，比如说慰藉，比如说成就感，又或者说是一点点鼓励，总之我很感谢
                  我的生命赋予我这样一件美好的事情，让我沉浸其中，让我乐此不疲。
               我认为，人的一生要经历很多事情，而年轻的时候，找到自己发自内心想要做并且能很好发挥天赋的事情十分重要，我认为那样才能更好的实现生命的意义，
                  所以我现在仍然在寻求值得我一生去做并且能做出价值的工作，出于人生充满的各种意外，虽然我目前做的是一份和美术几乎不相干的工作，但是我还是很认同我画画的天赋，我也不想
                  就这样把我这点天赋扔掉，所以，也是机缘巧合，我决定建立这个网站。
               感谢每一位到访本站的朋友。
               最后，愿我们一切都好。
               </p>
          </el-card>
        </section>
      
        <el-row>
          <el-card class="footercard">
            <span>版权归属：旭氏美术馆</span>
          </el-card>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import myHeader from '@/components/common/header'
export default {
  data() {
    return {
      // activeIndex: "/home"
    };
  },
  components:{
    myHeader
  }
};
</script>
<style   >
body {
  width: 100%;
  margin: 0px;
}
.el-container {
  width: 100%;
  left: 0;
  right: 0;
  height: 100%;
  position: fixed;
}

.el-main {
  /* background: -webkit-linear-gradient(left, #1c5da0, #c3e0ff);
  background: -o-linear-gradient(right, #1c5da0, #c3e0ff);
  background: -moz-linear-gradient(right,#1c5da0, #c3e0ff);
  background: linear-gradient(to right, #1c5da0, #c3e0ff); */
  background-color: #000;
  padding: 0px;
}
.topsection {
  height: 600px;
  width: 100%;
}
.el-card {
  margin: 8px;
}
/* .topcard {
  margin-top: 0px;
  height: 400px;
  width: 100%;
   border-radius:20px;
   background-color: #ffffff00;
} */

.asidecard {
  height: 700px;
  background-color: #ffffff00;
}
.asidegif {
  height: 400px;
  width: 100%;
  margin: 0px;
  background-color: #f0f3f5;
}
.asidecardnews {
  height: 250px;
  width: 100%;
  margin: 0;
  margin-top: 10px;
  background-color: #edf4ed;
}
/* .newstable tr:nth-child(2n){
  background-color:cornsilk;
} */
.footercard {
  height: 100px;
  background-color: #191b1d;
  color: #d3dce6;
  margin-bottom: 0px;
}
.csl {
  width: 100%;
  height: 600px;
}
.carouselitem {
  color: #475669;
  font-size: 14px;
  height: 600px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
label:hover {
    color: black;
    font-size: 40px;
}
label:mouseout{
}
.el-carousel__arrow--left {
    top: 300px;
    left: 16px;
}
.el-carousel__arrow--right {
    top: 300px;
    right: 16px;
}
.enjoycard{
 text-align:center;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 font-size: 30px;
 font-weight: 60px;
 /* background-color: #191b1d; */
 background: url(../assets/img/headerbk.jpg) no-repeat;
 background-size: cover;
}
.welcard{
  font-size: 20px;
  font-weight: 300;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  background: url(../assets/img/headerbk.jpg) no-repeat;
 background-size: cover;
}
.footercard{
  text-align: center;
    color: white;
   background: url(../assets/img/headerbk.jpg) no-repeat;
 background-size: cover;
}
</style>
