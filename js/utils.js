function utils(){};
utils.captureMouse=function(element){//CaptureMouse顾名思义是捕捉鼠标，计算mouse相对于容器的x,y坐标偏移，
                                    //本质是判断鼠标在浏览器中的鼠标偏移，之后对浏览器中容器宽度和高度进行再次偏移。
   var mouse={x:0,y:0}; 
   element.addEventListener('mousemove',function(event){     //addEventListener是一个侦听事件
      var x,y;
      if(event.pageX || event.pageY)//event.pageX 属性返回鼠标指针的位置，相对于文档的左边缘
      {  
         x=event.pageX;
         y=event.pageY;
      }
      else
      {
         x=event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
         y=event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
      }
      x -= element.offsetLeft;
      y -= element.offsetTop;
    
      mouse.x=x;
      mouse.y=y;
  },false);
  
  return mouse;
};



//Mozilla中： 

//addEventListener的使用方式 

//target.addEventListener(type,listener,useCapture); 

//target： 文档节点、document、window 或 XMLHttpRequest。 
//type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。 
//listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。 
//useCapture ：是否使用捕捉，一般用 false 。例如：document.getElementById("testText").addEventListener("keydown", function (event) { alert(event.keyCode); }, false); 

//IE中： 

//target.attachEvent(type, listener); 
//target： 文档节点、document、window 或 XMLHttpRequest。 
// type： 字符串，事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等。 
// listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。 例如：document.getElementById("txt").attachEvent("onclick",function(event){alert(event.keyCode);}); 

// W3C 及 IE 同时支持移除指定的事件, 用途是移除设定的事件, 格式分别如下: 

// removeEventListener(event,function,capture/bubble); 

// Windows IE的格式如下: 

// detachEvent(event,function); 
