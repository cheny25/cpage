//导航部分
function divNavIn1(){
   document.getElementById('nav1_1').style.display = 'none';
   document.getElementById('nav1').style.display = 'block';
}
function divNavOut1(){
   document.getElementById('nav1_1').style.display = 'block';
   document.getElementById('nav1').style.display = 'none';
}
function divNavIn2(){
   document.getElementById('nav1_2').style.display = 'none';
   document.getElementById('nav2').style.display = 'block';
}
function divNavOut2(){
   document.getElementById('nav1_2').style.display = 'block';
   document.getElementById('nav2').style.display = 'none';
}
function divNavIn3(){
   document.getElementById('nav1_3').style.display = 'none';
   document.getElementById('nav3').style.display = 'block';
}
function divNavOut3(){
   document.getElementById('nav1_3').style.display = 'block';
   document.getElementById('nav3').style.display = 'none';
}
function divNavIn4(){
   document.getElementById('nav1_4').style.display = 'none';
   document.getElementById('nav4').style.display = 'block';
}
function divNavOut4(){
   document.getElementById('nav1_4').style.display = 'block';
   document.getElementById('nav4').style.display = 'none';
}
function divNavIn5(){
   document.getElementById('nav1_5').style.display = 'none';
   document.getElementById('nav5').style.display = 'block';
}
function divNavOut5(){
   document.getElementById('nav1_5').style.display = 'block';
   document.getElementById('nav5').style.display = 'none';
}
function divNavIn6(){
   document.getElementById('nav1_6').style.display = 'none';
   document.getElementById('nav6').style.display = 'block';
}
function divNavOut6(){
   document.getElementById('nav1_6').style.display = 'block';
   document.getElementById('nav6').style.display = 'none';
}
function divNavIn7(){
   document.getElementById('nav1_7').style.display = 'none';
   document.getElementById('nav7').style.display = 'block';
}
function divNavOut7(){
   document.getElementById('nav1_7').style.display = 'block';
   document.getElementById('nav7').style.display = 'none';
}
function divNavIn8(){
   document.getElementById('nav1_8').style.display = 'none';
   document.getElementById('nav8').style.display = 'block';
}
function divNavOut8(){
   document.getElementById('nav1_8').style.display = 'block';
   document.getElementById('nav8').style.display = 'none';
}
function divNavIn9(){
   document.getElementById('nav1_9').style.display = 'none';
   document.getElementById('nav9').style.display = 'block';
}
function divNavOut9(){
   document.getElementById('nav1_9').style.display = 'block';
   document.getElementById('nav9').style.display = 'none';
}
function divNavIn10(){
   document.getElementById('nav1_10').style.display = 'none';
   document.getElementById('nav10').style.display = 'block';
}
function divNavOut10(){
   document.getElementById('nav1_10').style.display = 'block';
   document.getElementById('nav10').style.display = 'none';
}

//顶部选项卡部分
function firstTab(){
	var firstTabs = document.getElementById('list1').getElementsByTagName("li");
	var inputs = list3.getElementsByTagName("input");
	if (firstTabs.length != inputs.length) return;
	for (var i = 0; i < firstTabs.length; i++) {
	 	firstTabs[i].id = i;
	 	firstTabs[i].onclick = function(){
	 		for(var j = 0;j < firstTabs.length;j ++){ 
                firstTabs[j].className = "";
                inputs[j].style.display="none";
            }
            this.className="selected";
            inputs[this.id].style.display="block";
	 	}
	 }
}
function secondTab(){
	var secondTabs = document.getElementById('list5').getElementsByTagName("li");
	var divs = down_tab.getElementsByTagName("div");
	
	if (secondTabs.length != divs.length) return;
	for (var i = 0; i < secondTabs.length; i++) {
	 	secondTabs[i].id = i;
	 	secondTabs[i].onclick = function(){
	 		for(var j = 0;j < secondTabs.length;j ++){ 
                secondTabs[j].className = "";
                divs[j].style.display="none";
                
            }
            this.className="select";
            divs[this.id].style.display="block";
         
	 	}
	 }
}

function thirdTab(){
	var thirdTabs = document.getElementById('ul1').getElementsByTagName("li");
	var uls=list7.getElementsByTagName("ul");
	var index = 0;
	var timer = null;
	timer=setInterval(function(){
		index++;
		if(index>=thirdTabs.length){      //避免超出循环
			index=0;
		}
		for(var i=0;i<thirdTabs.length;i++){
			thirdTabs[i].className="";
			uls[i].style.display="none";
		}
		//高亮显示当前页签
		thirdTabs[index].className="select2";
		uls[index].style.display="block";
	},2500);
	//添加点击事件
	for(var j=0;j<thirdTabs.length;j++){
		thirdTabs[j].id=j;
		thirdTabs[j].onclick=function(){
			for(var k=0;k<thirdTabs.length;k++){
				thirdTabs[k].className="";
				uls[k].style.display="none";
			}
			this.className="select2";
			uls[this.id].style.display="block";
		}
	}
}

function fourthTab(){
	var fourthTabs = document.getElementById('fourthTab').getElementsByTagName("li");
	var lis = down_fourth.getElementsByTagName("li");
	
	if (fourthTabs.length != lis.length) return;
	for (var i = 0; i < fourthTabs.length; i++) {
	 	fourthTabs[i].id = i;
	 	fourthTabs[i].onclick = function(){
	 		for(var j = 0;j < fourthTabs.length;j ++){ 
                fourthTabs[j].className = "";
                lis[j].style.display="none";
                
            }
            this.className="select3";
            lis[this.id].style.display="block";
	 	}
	 }
}

function fifthTab(){
	var fifthTabs = document.getElementById('fifthTab').getElementsByTagName("li");
	var uls = down_fifth.getElementsByTagName("ul");
	
	if (fifthTabs.length != uls.length) return;
	for (var i = 0; i < fifthTabs.length; i++) {
	 	fifthTabs[i].id = i;
	 	fifthTabs[i].onmouseover = function(){
	 		for(var j = 0;j < fifthTabs.length;j ++){ 
                fifthTabs[j].className = "";
                uls[j].style.display="none";
                
            }
            this.className="select4";
            uls[this.id].style.display="block";
	 	}
	 }
}

function sixthTab(){
	var sixthTabs = document.getElementById('sixthTab').getElementsByTagName("li");
	var uls = down_sixth.getElementsByTagName("ul");
	
	if (sixthTabs.length != uls.length) return;
	for (var i = 0; i < sixthTabs.length; i++) {
	 	sixthTabs[i].id = i;
	 	sixthTabs[i].onmouseover = function(){
	 		for(var j = 0;j < sixthTabs.length;j ++){ 
                sixthTabs[j].className = "";
                uls[j].style.display="none";
                
            }
            this.className="select4";
            uls[this.id].style.display="block";
	 	}
	 }
}





// 一个页面中多个window .onload = function(){}冲突问题解决
function addLoadEvent(func){   
    var oldonload=window.onload;   
    if(typeof window.onload!='function'){   
        window.onload=func;   
    }else{   
        window.onload=function(){   
            oldonload();   
            func();   
        }   
    }   
}  

addLoadEvent(firstTab);
addLoadEvent(secondTab);
addLoadEvent(thirdTab);
addLoadEvent(fourthTab);
addLoadEvent(fifthTab);
addLoadEvent(sixthTab);



function picWordIn1(){
	document.getElementById('pic6_1').style.display="block";
}
function picWordOut1(){
	document.getElementById('pic6_1').style.display="none";
}
function picWordIn2(){
	document.getElementById('pic7_1').style.display="block";
}
function picWordOut2(){
	document.getElementById('pic7_1').style.display="none";
}
function picWordIn3(){
	document.getElementById('pic8_1').style.display="block";
}
function picWordOut3(){
	document.getElementById('pic8_1').style.display="none";
}
function picWordIn4(){
	document.getElementById('pic9_1').style.display="block";
}
function picWordOut4(){
	document.getElementById('pic9_1').style.display="none";
}



//bbs论坛

function ranklist(id,ele,elename,elechild,start_ele,cur_ele){
    var obj_id=document.getElementById(id);
    var obj_ele=$tag(obj_id,ele);
    for(i=0;i<obj_ele.length;i++){
        if(obj_ele[i].className.indexOf(elename) == -1) continue;
        var objlist=$tag(obj_ele[i],elechild);
        for(j=0;j<objlist.length;j++){
            objlist[j].onmouseover=function(){
                var paris=this.parentNode;
                var list=$tag(paris,elechild);
                for(x=0;x<list.length;x++){
                    var thisdiv=$tag(list[x],cur_ele)[0];
                    var thisp=$tag(list[x],start_ele)[0];
                    thisdiv.style.display="none";
                    thisp.style.display="block";
                    }
                var start=$tag(this,start_ele)[0];
                start.style.display='none';
                var cur=$tag(this,cur_ele)[0];
                cur.style.display='block';
            }
        }
    }
}
function $tag(id,tag){return id.getElementsByTagName(tag);}
setTimeout("ranklist('ranklist','ul','topcn','li','p','div')",0);