    window.onload = function(){
        var canvas = document.getElementById('speed'),  //获取canvas元素
            context = canvas.getContext('2d'),  //获取画图环境，指明为2d
            centerX = canvas.width/2,   //Canvas中心点x轴坐标
            centerY = canvas.height/2,  //Canvas中心点y轴坐标
            rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
            speed = 0; //加载的快慢就靠它了
        //绘制5像素宽的运动外圈
        function blueCircle(n){
            context.save();
            context.strokeStyle = "#fff"; //设置描边样式
            context.lineWidth = 5; //设置线宽
            context.beginPath(); //路径开始
            var grad  = context.createLinearGradient(0,0,0,100);
            grad.addColorStop(0,'#fff');    // 黄
            grad.addColorStop(0.5,'#006');  // 蓝
            grad.addColorStop(1,'#ff6');    //青
            context.strokeStyle = grad
            context.arc(centerX, centerY, 60 , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            context.stroke(); //绘制
            context.closePath(); //路径结束
            context.restore();
        }
        //绘制白色外圈
        function whiteCircle(){
            context.save();
            context.beginPath();
            context.lineWidth = 5; //设置线宽
            var grad  = context.createLinearGradient(0,0,0,100);
            grad.addColorStop(0,'#ff0');    // 黄
            grad.addColorStop(0.5,'#00f');  // 蓝
            grad.addColorStop(1,'#f0f');    //青
            context.strokeStyle = grad;
            context.arc(centerX, centerY, 60 , 0, Math.PI*2, false);
            context.stroke();
            context.closePath();
            context.restore();
        }
        //百分比文字绘制
        function text(n){
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.strokeStyle = "#fff"; //设置描边样式
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.font = "20px Arial"; //设置字体大小和字体
            //绘制字体，并且指定位置
            context.strokeText(n.toFixed(0)+"km/h", centerX, centerY);
            context.stroke(); //执行绘制
            context.restore();
        }
        //动画循环
        (function drawFrame(){
            window.requestAnimationFrame(drawFrame);
            context.clearRect(0, 0, canvas.width, canvas.height);
            whiteCircle();
            text(speed);
            blueCircle(speed);
            if(speed > 100){
              speed = 0
            };
            speed += 0.1
        }());
    }
