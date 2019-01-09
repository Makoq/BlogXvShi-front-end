<template>
  <div class="mapbak">


  
     <my-header></my-header>
      
       <!-- <div id="map" class="map"> </div> -->
      <br>
      <baidu-map/>
         
     
 

  </div>
</template>
<script>
import myHeader from '@/components/common/header';
import BaiduMap from '@/components/common/baidumap'


import ol from 'ol';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import source from 'ol/source'
import PROJ from 'ol/proj'
import sourceOSM from 'ol/source/OSM'
import Control from 'ol/control/Control';
export default {
    data(){
      return{
        

      }

    },
    methods:{
           
    }
    ,mounted:function(){
      this.$nextTick(function(){
        //  var ol = this.$ol;
         
      
          new Map({

             target: 'map',

             layers:[
               new TileLayer({source:new sourceOSM()})
                  
             ],

            view: new View({
              
              center:  [104.06, 30.67],
               
              zoom:2,
            }),
            controls:  []
          });

          

      })
    },
    components:{
      myHeader,
      BaiduMap
    }

};
</script>
<style>
 body{
   height: 800px;
   background-color: black;
 }
 .map{
   height: 500px;
   width: 100%;
 }
 .mapbak{
   background-color: black;
 }
  
</style>
