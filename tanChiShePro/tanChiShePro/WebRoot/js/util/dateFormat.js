Date.prototype.Format = function(fmt)   
{
	var o = {   
		"M+" : this.getMonth()+1,                 //月份   
		"d+" : this.getDate(),                    //日   
		"h+" : this.getHours(),                   //小时   
		"m+" : this.getMinutes(),                 //分   
		"s+" : this.getSeconds(),                 //秒   
		"q+" : Math.floor((this.getMonth()+3)/3), //季度   
		"S"  : this.getMilliseconds()             //毫秒   
  	};   
	if(/(y+)/.test(fmt))   
	fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	for(var k in o)   
	if(new RegExp("("+ k +")").test(fmt))   
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	return fmt;   
} 

//根据年月返回天数
String.prototype.getDaysofMonth = function(year,month){
	
	var judge = 0;
	var days  = 30;
	
	/*判断闰年*/
	if((year%4==0 && year%100!=0) || (year%100==0 && year%400==0))
		judge = 1;
	else
		judge = 0;
	
	if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)/*判断每月的天数*/
		days = 31;

	if (month==4||month==6||month==9||month==11)
		days = 30;

	if (month==2 && judge==0)    days = 28;
	if (month==2 && judge==1)    days = 29;

	return days;
}
