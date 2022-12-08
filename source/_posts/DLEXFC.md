---
title: 倒计时
cover: '/img/I.png'
tags: 倒计时
categories: 倒计时
top_img: '/img/I.png'
abbrlink: cc7e52cb
data: 2022-11-24 21:31:00
updata: 2022-11-28 21:31:00
---
{% p center large, 人生计时 %}

  {% gallery %}
  ![](/img/I.png)
  {% endgallery %}

{% span green h2 , 当前时间 %}

<html>  
<head>  
<meta charset="utf-8">  
<title>show_time</title>  
<style>  
body {  
    padding-top: 40px;  
}  
#main {  
    margin: auto;  
    text-align: center;  
    width: 300px;  
    height: 50px;   
    background-color: #FFF;  
}  
#show_time0,#show_time {  
width:300px;
height:50px;
    color: #61ac85;  
}  
</style>  
</head> 
<body>  
<div id="main">  
<div id="show_time0" style="">
<script>
//这里就一句话就可以显示时间，但不是我想要的最理想结果
 setInterval("show_time0.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);  
</script>
</div>
<div id="show_time">  
<script>  
//这里代码多了几行，但是不会延迟显示，速度比较好，格式可以自定义，是理想的时间显示
setInterval("fun(show_time)",1);
function fun(timeID){ 
var date = new Date();  //创建对象  
var y = date.getFullYear();     //获取年份  
var m =date.getMonth()+1;   //获取月份  返回0-11  
var d = date.getDate(); // 获取日  
var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) 
var ww = ' 星期'+'日一二三四五六'.charAt(new Date().getDay()) ;//星期几
var h = date.getHours();  //时
var minute = date.getMinutes()  //分
var s = date.getSeconds(); //秒
var sss = date.getMilliseconds() ; //毫秒
if(m<10){
m = "0"+m;
}
if(d<10){
d = "0"+d;
}
if(h<10){
h = "0"+h;
}

if(minute<10){
minute = "0"+minute;
}

if(s<10){
s = "0"+s;
}

if(sss<10){
sss = "00"+sss;
}else if(sss<100){
sss = "0"+sss;
}

document.getElementById(timeID.id).innerHTML =  y+"-"+m+"-"+d+"   "+h+":"+minute+":"+s+"."+sss+"  "+ww;
//document.write(y+"-"+m+"-"+d+"   "+h+":"+minute+":"+s);  
  }
</script>  
</div>  
</div>  
</body>  
</html>

 {% span green h2,2025年高考倒计时（现在还是个高中生）%}
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<h1 id="hh"></h1>
	</body>
	<script type="text/javascript">
		function station(x,y,z){
			//当前时间
			var now = Date.now(),
				//结束时间
				end = new Date(x,y-1,z),
				ends = end.getTime();
			var ss = ends - now;
			var s = Math.floor(ss/1000);
			//相差天数
			var day = Math.floor(s / 60 / 60 / 24);
			//相差小时数
			var hours = Math.floor(s / 60 / 60 % 24);
			//相差分钟数
			var min = Math.floor(s / 60 % 60 );
			//相差秒数
			var sec = Math.floor(s % 60 );
			var html = "距离2025年高考还有"+day+"天"+hours+"时"+min+"分"+sec+"秒";
			hh.innerHTML = html;

		}
		station(2025,06,07);
		//一秒一次调用
		setInterval(function(){
			station(2025,06,07);
		},1000);
	</script>
	<style type="text/css">
		#hh{
			font-size: 50px;
			text-align: center;
		}
	</style>
</html>


 {% span green h2,爷活过的日子%}

<html>
<body>
    <p>
            <span>爷已经在这个世界上生活了</span>
            <span id='birth'></span>
            <span>天</span>
</p>
<script>
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var pass1 = Date.parse('2007/7/5');  //开始的日期
    var pass2 = Date.parse(y+'/'+m+'/'+d);  //当前日期
    var time = (pass2-pass1)/(1000*60*60*24);  //过去的天数
    document.getElementById("birth").innerHTML=(time);
    <style type="text/css">
		#hh{
			font-size: 20px;
			text-align: center;
		}
	</style>
</script>
</body>
</html>


