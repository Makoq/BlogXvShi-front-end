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
              :default-active="activeIndex"
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
        <section class="topsection">
          <!-- <el-card class="topcard"> -->
          <div class="block">
            <el-carousel height="350px" class="csl">
              <el-carousel-item class="carouselitem">
                <img src="../assets/img/cs01.png" style="height:410px;width:100%">
              </el-carousel-item>

              <el-carousel-item class="carouselitem">
                <img src="../assets/img/csl02.png" style="height:410px;width:100%">
              </el-carousel-item>

              <el-carousel-item class="carouselitem">
                <img src="../assets/img/csl03.png" style="height:410px;width:100%">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- </el-card> -->
        </section>
        <section>
          <el-row style="height:500px">
            <el-col :span="5">
              <el-card class="asidecard">
                <el-card class="asidegif">
                  <img src="../assets/img/blog.gif" style="width:100%;height:450px">
                </el-card>

                <el-card class="asidecardnews">
                  <marquee behavior="scroll" direction="up" scrollamount="3" loop="2">
                    <table class="newstable">
                      <tr>
                        <th>2018.12.1</th>&nbsp;
                        <td>12新作《雪地里的糖》</td>
                      </tr>
                      <tr>
                        <th>2018.11.1</th>&nbsp;
                        <td>11新作《女孩》</td>
                      </tr>
                      <tr>
                        <th>2018.12.1</th>&nbsp;
                        <td>12新作《雪地里的糖》</td>
                      </tr>
                      <tr>
                        <th>2018.11.1</th>&nbsp;
                        <td>11新作《女孩》</td>
                      </tr>
                      <tr>
                        <th>2018.12.1</th>&nbsp;
                        <td>12新作《雪地里的糖》</td>
                      </tr>
                      <tr>
                        <th>2018.11.1</th>&nbsp;
                        <td>11新作《女孩》</td>
                      </tr>
                    </table>
                  </marquee>
                </el-card>
              </el-card>
            </el-col>

            <el-col :span="19">
              <div>
                <router-view></router-view>
              </div>
            </el-col>
          </el-row>
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
export default {
  data() {
    return {
      activeIndex: "/home"
    };
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
.el-header {
  width: 100%;

  height: 200px;
  background-color: #191b1d;
  box-shadow: #191b1d 50px;
}
.el-main {
  /* background: -webkit-linear-gradient(left, #1c5da0, #c3e0ff);
  background: -o-linear-gradient(right, #1c5da0, #c3e0ff);
  background: -moz-linear-gradient(right,#1c5da0, #c3e0ff);
  background: linear-gradient(to right, #1c5da0, #c3e0ff); */
  background-color: #000;
}
.topsection {
  height: 420px;
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
.el-menu {
  left: 0;
  background-color: #191b1d;

  width: 100%;
}
.el-menu-item {
  font-size: 22px;
  font-family: -webkit-pictograph;
}
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
  height: 420px;
}

.carouselitem {
  color: #475669;
  font-size: 14px;
  height: 410px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

