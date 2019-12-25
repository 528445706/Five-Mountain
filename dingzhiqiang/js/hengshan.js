function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var topcb=document.getElementById("topcb");
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var num=document.getElementById("num").children;
var i=1;
var moving=false;
//下一张
function next(){
	if(moving){
		return;
	}
	moving=true;
	i++;
	red();
	animate(slider,{left:-1200*i},function(){
		if(i==6){
			slider.style.left="-1200px";
			i=1;
		}
		moving=false;
	});
}
//前一张
function head(){
	if(moving){
		return;
	}
	moving=true;
	i=i-1;
	red();
	animate(slider,{left:-1200*i},function(){
		if(i==0){
			slider.style.left="-1200px";
			i=5;
		}
		moving=false;
	});
}
var flag=setInterval(next,3000); 
//鼠标的移上
topcb.onmouseover=function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(flag);
}
//鼠标的移开	
topcb.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	flag=setInterval(next,3000);
}
//左右的按钮点击
right.onclick=next;
left.onclick=head;
//圆圈点击
for(var j=0;j<num.length;j++){
	num[j].sum=j;
	num[j].onclick=function(){
		i=this.sum+1;
		red();
		animate(slider,{left:-1200*i});
	}
}
//颜色变化函数
function red(){
	for(var m=0;m<num.length;m++){
		num[m].className="";
	}
	if(i==6){
		num[0].className="rrr";
	}
	else if(i==0){
		num[4].className="rrr";
	}
	else{
		num[i-1].className="rrr";
	}
}
var topcc=document.getElementById("topcc");
var photo=topcc.getElementsByTagName("img");
for(var n=0;n<photo.length;n++){
	photo[n].onclick=function(){
		var src=this.getAttribute("src");
		if(src=="img/a.jpeg"){
			i=1;
			animate(slider,{left:-1200*i},function(){
				if(i==6){
					slider.style.left="-1200px";
					i=1;
				}
				moving=false;
			});
			red();
		}
		if(src=="img/c.jpeg"){
			i=2;
			animate(slider,{left:-1200*i},function(){
				if(i==6){
					slider.style.left="-1200px";
					i=1;
				}
				moving=false;
			});
			red();
		}
		if(src=="img/d.jpg"){
			i=3;
			animate(slider,{left:-1200*i},function(){
				if(i==6){
					slider.style.left="-1200px";
					i=1;
				}
				moving=false;
			});
			red();
		}
		if(src=="img/e.jpg"){
			i=4;
			animate(slider,{left:-1200*i},function(){
				if(i==6){
					slider.style.left="-1200px";
					i=1;
				}
				moving=false;
			});
			red();
		}
		if(src=="img/f.jpg"){
			i=5;
			animate(slider,{left:-1200*i},function(){
				if(i==6){
					slider.style.left="-1200px";
					i=1;
				}
				moving=false;
			});
			red();
		}
	}
}









//文字的飘动；
message="万丈融峰插紫霄，路当穷处架仙桥！" 
ns6switch=1 
var ns6=document.getElementById && !document.all 
console.log(ns6);//true;
mes=new Array(); 
mes[0]=-1; 
mes[1]=-4; 
mes[2]=-7;
mes[3]=-10; 
mes[4]=-7; 
mes[5]=-4; 
mes[6]=-1; 
sss=0; 
num2=0; 
txt=""; 
function jump0(){ 
    if(message.length > 6){ //把一个一个字符写入span;写入名字是flow的div ；
        for(i=0; i != message.length;i++){ 
            txt=txt+"<span style='position:relative;' id='n"+i+"'>"+message.charAt(i)+"</span>"
        }; 
        jump.innerHTML=txt; 
        txt=""; 
        jump1a() 
    } 
} 

function jump1a(){ //效果中万字向左的动作
    nfinal=document.getElementById("n0");
    // console.log(nfinal);
    // console.log(num2);
    nfinal.style.left=-num2; 
    if(num2 != 9){ 
        num2=num2+3; 
    setTimeout("jump1a()",50) 
    } 
    else{ 
        jump1b() 
    } 
} 

function jump1b(){ //效果中万字向右的动作
    nfinal.style.left=-num2; 
    // console.log(num2);
    if(num2 != 0){
        num2=num2-3; 
        setTimeout("jump1b()",50) 
    } 
    else{ 
        jump2() 
    } 
} 

function jump2(){ //实现高度的变化；
    txt=""; 
    for(i=0;i != message.length;i++){ 
        if(i+sss > -1 && i+sss < 7){ 
            txt=txt+"<span style='position:relative;top:"+mes[i+sss]+"'>"+message.charAt(i)+"</span>" 
        } 
        else{
            txt=txt+"<span>"+message.charAt(i)+"</span>"
        } 
    } 
    jump.innerHTML=txt; 
    txt=""; 
    if(sss != (-message.length)){ 
        sss--; 
        setTimeout("jump2()",50)
    } 
    else{
        sss=0; 
        setTimeout("jump0()",50)
    }
} 
var flow=document.getElementById("flow");
if (true){ 
    jump=document.getElementById("flow");
    console.log(jump);
    jump0() 
} 
else{
    document.getElementById("flow").write(message);
}