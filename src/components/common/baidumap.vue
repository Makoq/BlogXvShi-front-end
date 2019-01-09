<template>
  <div  >
       
       
     <div id="allmap" class="allmap"></div> 
       
  </div>
</template>
<script>
 import myHeader from '@/components/common/header';
export default {
 
  data () {
    return {
         markerArr : [
            {
                 title:"我的母校",
                 content:"我的备注",
                 point:"116.350427|40.007361",
                 isOpen:0,
                 icon:{
                     w:21,
                     h:21,
                     l:0,
                     t:0,
                     x:6,
                     lb:5
                     }
                }
		 ],

    }
    
  },
  methods:{
       //创建infoWindow
    createInfoWindow(i){
        var json = this.markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    },
    //创建一个Icon
     createIcon(json){
        var icon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    },
 
      map(){
      
      var map =new BMap.Map("allmap");
      var point =new BMap.Point(116.35146,40.00819)
      map.centerAndZoom(point, 17);                 // 初始化地图，设置中心点坐标和地图级别    

      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 

      map.addControl(new BMap.NavigationControl());    
      map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT}));    
      map.addControl(new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1}));    
      map.addControl(new BMap.MapTypeControl());    

      this.addMarker(map)
 

      },

      //创建maker
       addMarker(map){
        for(var i=0;i<this.markerArr.length;i++){
            var json = this.markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = this.createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = this.createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			// (()=>{
			// 	var index = i;
			// 	var _iw = this.createInfoWindow(i);
			// 	var _marker = marker;
			// 	_marker.addEventListener("click",function(){
			// 	    this.openInfoWindow(_iw);
			//     });
			//     _iw.addEventListener("open",function(){
			// 	    _marker.getLabel().hide();
			//     })
			//     _iw.addEventListener("close",function(){
			// 	    _marker.getLabel().show();
			//     })
			// 	label.addEventListener("click",function(){
			// 	    _marker.openInfoWindow(_iw);
			//     })
			// 	if(!!json.isOpen){
			// 		label.hide();
			// 		_marker.openInfoWindow(_iw);
			// 	}
			// })()
        }
    },
   
 
 

  },
  mounted(){
      this.map()
     
      

  },
  components:{
      myHeader
  }
}
</script>
<style lang="scss">
 .allmap{
     height: 600px;
     
       
 }
 .el-main{
     
 }
  
</style>
