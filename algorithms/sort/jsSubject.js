//高精度运算
function preciseAdd(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m+num2*m)/m;
}

function preciseSub(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m-num2*m)/m;
}

function preciseMul(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len1+len2;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1*num2)/Math.pow(10,len);
}

function preciseDiv(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len2-len1;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1/num2)*Math.pow(10,len);
}
//千位分隔符
function num(num){
	if(typeof num!='number'){
		return;
	}
	num+='';
	if(num.indexOf('-')==0){
		return '-'+numChange(num.slice(1));
	}
	if(num.indexOf('.')!=-1){
		return numChange(num.split('.')[0])+'.'+num.split('.')[1];
	}else{
		return numChange(num);
	}
}
function numChange(num){
	var l=num.length;
	var newNum='';
	while(l>3){
		newNum=','+num.substring(l-3,l)+newNum;
		l=l-3;
	}
	newNum=num.substring(0,l)+newNum;
	return newNum;
}
//扩展对象方法
function cloneObj(oldObj) { //复制对象方法
	if (typeof(oldObj) != 'object') return oldObj;
	if (oldObj == null) return oldObj;
	var newObj = new Object();
	for (var i in oldObj)
		newObj[i] = cloneObj(oldObj[i]);
	return newObj;
};
function extendObj() { //扩展对象
	var args = arguments;
	if (args.length < 2) return;
var temp = cloneObj(args[0]); //调用复制对象方法
for (var n = 1; n < args.length; n++) {
	for (var i in args[n]) {
		temp[i] = args[n][i];
	}
}
return temp;
}
/*
@params 各种排序算法
*/
//冒泡排序
function bubble(arr){
	var len=arr.length;
	for(var i=len-1;i>0;i--){
		for(var j=0;j<i;j++){
			if(arr[j]>arr[j+1]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}
//冒泡优化1，设立标记
function bubble1(arr){
	var len=arr.length;
	var change=true;

	for(var i=len-1;i>0&&change;i--){
		change=false;
		for(var j=0;j<i;j++){
			if(arr[j]>arr[j+1]){
				change=true;
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}	
	}
	return arr;
}
//#优化2：记录某次遍历时最后发生数据交换的位置，这个位置之后的数据显然已经有序了.
//因此通过记录最后发生数据交换的位置就可以确定下次循环的范围了。
function bubble2(arr){
	var len=arr.length;
	var change=true;
	var pos=len-1;
	var tp=pos;

	for(var i=len-1;i>0&&change;i--){
		change=false;
		for(var j=0;j<pos&&flag;j++){
			if(arr[j]>arr[j+1]){
				change=true;
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
				tp=j+1;
			}
		}
		pos=tp;
	}
	return arr;
}
//选择排序
//每次选择最小的往前排
function selectSort(arr){
	var len=arr.length;
	var min=0;
	for (var i = 0 ; i < len; i++) {
		min=i;
		for(j=i+1;j<len;j++){
			if(arr[i]>arr[j]){
				min=j;
			}
		}
		var temp=arr[i];
		arr[i]=arr[min];
		arr[min]=temp;
	}
	return arr;
}
//插入排序
// 插入排序的工作原理是，对于每个未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 步骤：
// 1从第一个元素开始，该元素可以认为已经被排序
// 2取出下一个元素，在已经排序的元素序列中从后向前扫描
// 3如果被扫描的元素（已排序）大于新元素，将该元素后移一位
// 4重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
// 5将新元素插入到该位置后
// 6重复步骤2~5
function insertSort(arr){
	var len=arr.length;
	var temp;

	for(var i=1;i<len;i++){
		temp=arr[i];
		for(var j=i-1;j>=0&&temp<arr[j];j--){
			arr[j+1]=arr[j];
		}
		arr[j+1]=temp;
	}	
	return arr;
}

//希尔排序
function shellSort(arr){
	var len=arr.length,temp;

	for(var gap=len>>1;gap>0;gap>>=1){
		for(var i=gap;i<len;i++){
			temp=arr[i];
			for(var j=i-gap;j>=0&&temp<arr[j];j-=gap){
				arr[j+gap]=arr[j];
			}
			arr[j+gap]=temp;
		}
	}	
	return arr;
}
//归并排序
function mergeSort(arr){
	var len=arr.length;
	if(len<2){
		return arr;
	}
	var mid=len>>1;
	return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));

	function merge(leftArr,rightArr){
		var res=[];
		while(leftArr.length&&rightArr.length){
			res.push(leftArr[0]<=rightArr[0]?leftArr.shift():rightArr.shift());
		}
		return res.concat(leftArr.concat(rightArr));
	}
}

//快速排序
function quickSort(arr){
	var left=0;
	var right=arr.length-1;

	quick(arr,left,right);
	return arr;
	function quick(arr,left,right){
		var low=left;
		var high=right;
		var key=arr[left];

		if(left<right){
			while(low<high){
				while(low<high && arr[high]>=key){
					high--;
				}
				if(low<high){
					arr[low]=arr[high];
					low++;
				}
				while(low<high && arr[low]<=key){
					low++;
				}
				if(low<high){
					arr[high]=arr[low];
				}
			}
			arr[low]=key;
			quick(arr,left,low-1);
			quick(arr,low+1,right);
		}
	}
}



























// function quickSort(arr){
// 	return quick(arr,0,arr.length-1);

// 	function quick(arr,left,right){
// 		var key=arr[left];
// 		var low=left;
// 		var high=right;

// 		if(left<right){
// 			while(low<high){
// 				// 从右往左找，找到一个比 key 小的数	
// 				while(low<high && arr[high]>=key){
// 					high--;
// 				}
// 				if(low < high){
// 					arr[low]=arr[high];
// 					low++;
// 				}
// 				// 从左往右找，找到一个比 key 大的数
// 				while(low<high&& arr[low]<=key){
// 					low++;
// 				}
// 				if(low < high){
// 					arr[high]=arr[low];
// 					high--;
// 				}
// 			}
// 			arr[low]=key;
// 			quick(arr,left,low-1);
// 			quick(arr,low+1,right);
// 		}
// 		return arr;
// 	}
// }

//树的遍历
/*递归*/
//先序
function preTraversal(node){
	if(node){
		console.log(node.value);
		arguments.callee(node.left);
		arguments.callee(node.right);
	}
}
//中序
function orderTraversal(node){
	if(node){
		arguments.callee(node.left);
		console.log(node.value);
		arguments.callee(node.right);
	}
}
//后序
function postTraversal(node){
	if(node){
		arguments.callee(node.left);
		arguments.callee(node.right);
		console.log(node.value);
	}
}
/*非递归*/
function preTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			node=stack.pop();
			console.log(node.value);
			if(node.right){
				stack.push(node.right);
			}
			if(node.left){
				stack.push(node.left);
			}
		}
	}else{
		console.log("Empty Tree!")
	}
}
function orderTraversalN(node){
	var stack=[];
	while(stack.length!=0||node){
		if(node){
			stack.push(node);
			node=node.left;
		}else{
			node=stack.pop();
			console.log(node.value);
			node=node.right;
		}
	}
}
function postTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			var tmp=stack[stack.length-1];
			if(tmp.left&&node!=tmp.left&&node!=tmp.right){
				stack.push(tmp.left);
			}else if(tmp.right&&node!=tmp.right){
				stack.push(tmp.right);
			}else{
				console.log(stack.pop().value);
				node=tmp;
			}
		}
	}
}
//判断重复字符串个数
function countChar(str) {
	var count={};
	str.split('')
	.reduce(function(pre,cur){
		pre[cur] ? pre[cur]++:pre[cur]=1;
		return pre;
	},count);
	return count;
}
//去除数组重复字符
function unique(arr){
	var unique={};
	var uniqueArr=new Array();
	arr.forEach(function(item,index,array){
		if(!unique[item]){
			unique[item]=item;
			uniqueArr.push(item);
		}
	})
	return uniqueArr;
}
//十六进制随机颜色生成
function color(){
	var value=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
	var color='#';
	for(var i=0;i<6;i++){
		color+=value[Math.round(Math.random()*15)];
	}
	return color;
}
//①生成一个数组，数组的值为从0到100
function newArr(){
	var arr=new Array(100);
	return arr.fill('temp').map(function(item,index,array){
		return index;
	})
	//方法二
// 	var a = Array(100).join(',').split(',').map(function(item, index) {
// 　　return index;
// });
}
//随机打乱一个数组的顺序
function randomArr(arr){
	var temp='';
	var index='';
	for(var i=0;i<arr.length;i++){
		temp=arr[i];
		do{
			index=Math.round(Math.random()*arr.length);
		}while(index>=arr.length)
		arr[i]=arr[index];
		arr[index]=temp;
	}
}
// 方法二
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     sign = 1; 
// a.sort(function(a, b) {
//     //因为Math.random产生的数在0-1之间
//     //所以0.5两边的概率是相、、的
//     //大于0.5时为升序，小于0.5时为降序
//     sign = (Math.random() > 0.5) ? 1 : -1;
//     return (a - b) * sign;
// });
//二分查找
function halfFind(value,arr){
	var low=0;
	var high=arr.length-1;

	while(low<high){
		var min=Math.round((high-low)/2);
		if(value==arr[min]){
			return true;
		}else if(value>arr[min]){
			low=min+1;
		}else{
			high=min-1;
		}
	}
	return false;
}
//编写一个方法 求一个字符串的字节长度
//假设：一个英文字符占用一个字节，一个中文字符占用两个字节
function GetBytes(str){
	var len = str.length;
	var bytes = len;
	for(var i=0; i<len; i++){
		if (str.charCodeAt(i) > 255) bytes++;
	}
	return bytes;
}
//JavaScript中检测一个变量是一个String类型
//String类型有两种生成方式：
//(1)Var str = “hello world”;
//(2)Var str2 = new String(“hello world”);
function IsString(str){
	return (typeof str == "string" || str.constructor == String);
}
//JavaScript中如何对一个对象进行深度clone
function cloneObject(o) {
	if(!o || 'object' !== typeof o) {
		return o;
	}
	var c = 'function' === typeof o.pop ? [] : {};
	var p, v;
	for(p in o) {
		if(o.hasOwnProperty(p)) {
			v = o[p];
			if(v && 'object' === typeof v) {
				c[p] = Ext.ux.clone(v);
			}
			else {
				c[p] = v;
			}
		}
	}
	return c;
};
 //请实现，鼠标点击页面中的任意标签，alert该标签的名称．（注意兼容性）
// <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
// <title>鼠标点击页面中的任意标签，alert该标签的名称</title>
// <style>
// div{ background:#0000FF;width:100px;height:100px;}
// span{ background:#00FF00;width:100px;height:100px;}
// p{ background:#FF0000;width:100px;height:100px;}
// </style>
// <script type="text/javascript">
// document.onclick = function(evt){
// var e = window.event || evt;
// var tag = e["target"] || e["srcElement"];
// alert(tag.tagName);
// };
// </script>
// </head>
// <body>
// <div id="div"><span>SPAN</span>DIV</div>
// <span>SPAN</span>
// <p>P</p>
// </body>
// </html>

//回文字符串
/*c++判断
#include<iostream>
#include<string.h>
using namespace std;

int c[1000][1000];
char str1[1000];
char str2[1000];

void func(int m,int n){
	if(m<0||n<0){
		return;
	}
	for(int i=0;i<m;i++){
		for(int j=0;j<n;j++){
			c[i][j]=0;
		}
	}
	int count=0;
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		if(str[i]==str[j]){
    			if(i==0&&j==0){
    				c[i][j]=1;
    			}else{
    				c[i][j]=c[i-1][j-1];
    			}
    		}else{
    			c[i][j]=0;
    		}
    	}
    }
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		if(c[i][j]>count){
    			count=c[i][j];
    		}
    	}
    }
    cout<<count<<endl;
}
*/
// int main(){
// 	char s;
// 	while(cin>>s&&s){
// 		str1=s;
// 		m=strlen(str1);
// 		for(int i=m-1;i>=0;i--){
// 			str2[i]=str1[i];
// 		}
// 		func(m,m);
// 	}
// }
/*原生JS判断复选框是否被选中和获取下拉框的值：
<body>
    <input type="checkbox" id="checkbox" checked="check"></input>
    <select id="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    */
    // <script type="text/javascript">
    // console.log(document.getElementById('checkbox').checked);
    // var se=document.getElementById('select');
    // se.addEventListener('change',function(){
    // 	console.log(se.options[se.selectedIndex].value);
    // 	console.log(se.options[se.selectedIndex].text);
    // },false);
    // </script>
// 原生JS判断单选框是否被选中和获取值：
// <!--html-->
// <form id="list" method="post" action="">
// <input type="radio" name="user" value="1">1
// <input type="radio" name="user" checked="checked" value="2">2
// <input type="radio" name="user" value="3">3
// </form>
// */
// <script language="javascript">
// function usubmit(action){//获取radio的value的方法
// var radios = document.getElementById("list").user;//获取id为list下的所有name为user的值的集合
// for(var i=0;i<radios.length;i++){//循环值得集合
// if(radios[i].checked){//通过checked属性判断是否被选中
// var userid = radios[i].value//将被选择的radio的值赋给变量userid
// }
// }
// alert(userid)//弹出被选中的radio的值
// }
//Object.keys兼容用法
(function{
	Object.keys = Object.keys || function(obj){
		　　  var a = [];
		　　  for(a[a.length] in obj);
			　　  return a ;
	};
})()