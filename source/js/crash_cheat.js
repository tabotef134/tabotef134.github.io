<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/BT2.gif");
         document.title = '你干嘛！ 给我回来！|';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/BT1.jpeg");
         document.title = '好欸！RUA|' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });