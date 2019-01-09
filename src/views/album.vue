<template>
  <div  >

    
     <el-container  >
   
        <el-header>
          <my-header/>
        </el-header>
      <el-main>
          <section style="width:100%">
                
                    <!-- <video src="../assets/video/movieclip.mp4" controls="controls"></video> -->
                    <el-row>
                      <el-col :span="7">&nbsp;</el-col>
                      <el-col :span="10">
                        <el-card class="videocard">
                          <video-player  class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions1"
                        ></video-player>
                        </el-card>
                      </el-col>
                      <el-col :span="7">
                        &nbsp;
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-card class="videotag">
                        <span >one of my movie clip works.</span>
                      </el-card>
                    </el-row>
                    <el-row>
                      <el-col :span="7">&nbsp;</el-col>
                      <el-col :span="10">
                        <el-card class="videocard">
                          <video-player  class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions2"
                        ></video-player>
                        </el-card>
                      </el-col>
                      <el-col :span="7">
                        &nbsp;
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-card class="videotag">
                        <span >one of my Vlog.</span>
                      </el-card>
                    </el-row>
                   
          </section>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import { videoPlayer } from 'vue-video-player';
  import myHeader from '@/components/common/header';
export default {
    data(){
            return{
                   playerOptions1 : {
        //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src: "//f.us.sinaimg.cn/003Pl5vblx07neVOTXTO01040201yBub0k020.mp4?label=mp4_720p&template=1280x720.28&Expires=1545316659&ssig=iORW%2FKwK6s&KID=unistore,video" //url地址
        },
        ],
         poster: "src//assets//img//video01.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
     playerOptions2 : {
        //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [ 
        {
          type: "video/mp4",
          src: "//f.us.sinaimg.cn/002Vrmkwlx07ozMyk52801040200j4Kn0k010.mp4?label=mp4_hd&template=864x480.28&Expires=1545320763&ssig=Xr944ij3ke&KID=unistore,video" //url地址
        },
        ],
         poster: "src//assets//img//video02.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    }
                }
    },components: {
          videoPlayer,
          myHeader
    }
};
</script>
<style  lang="scss"  scoped>
body{
  padding: 0px;
  margin: 0px;
  background-color: black;
}
.el-main{
  background-color: black;
}
// .vidoemain{
//   width: 100%;
//    height: 100%;
//   //  background-color: black;
// //    background: url(../assets/img/headerbk.jpg) no-repeat;
// //  background-size: cover;
//  }
 .videocard{
   height: 470px;
   width: 800px;
   padding: 0px;
   background-color: black;
 }
  .videotag{
    text-align:center;
    background-color:black;
    color:white;
  }
</style>
