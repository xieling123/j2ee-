/* 计算两日期相差的日期年月日等 */ 
Date.prototype.dateDiff = function(interval,objDate2) 
{ 
    var d=this, i={}, t=d.getTime(), t2=objDate2.getTime(); 
    i['y']=objDate2.getFullYear()-d.getFullYear(); 
    i['q']=i['y']*4+Math.floor(objDate2.getMonth()/4)-Math.floor(d.getMonth()/4); 
    i['m']=i['y']*12+objDate2.getMonth()-d.getMonth(); 
    i['ms']=objDate2.getTime()-d.getTime(); 
    i['w']=Math.floor((t2+345600000)/(604800000))-Math.floor((t+345600000)/(604800000)); 
    i['d']=Math.floor(t2/86400000)-Math.floor(t/86400000); 
    i['h']=Math.floor(t2/3600000)-Math.floor(t/3600000); 
    i['n']=Math.floor(t2/60000)-Math.floor(t/60000); 
    i['s']=Math.floor(t2/1000)-Math.floor(t/1000); 
    return i[interval]; 
} 

//---------------------------------------------------   
// 判断闰年   
//---------------------------------------------------   
Date.prototype.isLeapYear = function()    
{    
    return (0==this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0)));    
}    
   
//---------------------------------------------------   
// 日期格式化   
// 格式 YYYY/yyyy/YY/yy 表示年份   
// MM/M 月份   
// W/w 星期   
// dd/DD/d/D 日期   
// hh/HH/h/H 时间   
// mm/m 分钟   
// ss/SS/s/S 秒   
//---------------------------------------------------   
Date.prototype.Format = function(formatStr)    
{    
    var str = formatStr;    
    var Week = ['日','一','二','三','四','五','六'];   
   
    str=str.replace(/yyyy|YYYY/,this.getFullYear());    
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));    
   
    str=str.replace(/MM/,this.getMonth()>8?(this.getMonth()+1).toString():'0' + (this.getMonth()+1));    
    str=str.replace(/M/g,this.getMonth()+1);    
   
    str=str.replace(/w|W/g,Week[this.getDay()]);    
   
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());    
    str=str.replace(/d|D/g,this.getDate());    
   
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());    
    str=str.replace(/h|H/g,this.getHours());    
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());    
    str=str.replace(/m/g,this.getMinutes());    
   
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());    
    str=str.replace(/s|S/g,this.getSeconds());    
   
    return str;    
}    
   
//+---------------------------------------------------   
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd    
//+---------------------------------------------------   
function daysBetween(DateOne,DateTwo)   
{    
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));   
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);   
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));   
   
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));   
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);   
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));   
   
    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);    
    return Math.abs(cha);   
}   
   
   
//+---------------------------------------------------   
//| 日期计算   
//+---------------------------------------------------   
Date.prototype.DateAdd = function(strInterval, Number)
{   var dtTmp = this;  
	
	switch (strInterval) {    
        case 's' :dtTmp=dtTmp.toUTCString();return new Date(Date.parse(dtTmp) + (1000 * Number));   
        case 'n' :dtTmp=dtTmp.toUTCString();return new Date(Date.parse(dtTmp) + (60000 * Number));   
        case 'h' :dtTmp=dtTmp.toUTCString();return new Date(Date.parse(dtTmp) + (3600000 * Number));   
        case 'd' :dtTmp=dtTmp.toUTCString();return new Date(Date.parse(dtTmp) + (86400000 * Number));   
        case 'w' :dtTmp=dtTmp.toUTCString();return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));   
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());   
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());   
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());   
    }   
}    
   
//+---------------------------------------------------   
//| 比较日期差 dtEnd 格式为日期型或者 有效日期格式字符串   
//+---------------------------------------------------   
Date.prototype.DateDiff = function(strInterval, dtEnd) 
{    
    var dtStart = this;   
    if (typeof dtEnd == 'string' )//如果是字符串转换为日期型   
    {    
        dtEnd = StringToDate(dtEnd);   
    }   
    switch (strInterval) {    
        case 's' :return parseInt((dtEnd - dtStart) / 1000);   
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);   
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);   
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);   
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));   
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);   
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();   
    }   
}   
   
//+---------------------------------------------------   
//| 日期输出字符串，重载了系统的toString方法   
//+---------------------------------------------------   
Date.prototype.toString = function(showWeek)   
{    
    var myDate= this;   
    var str = myDate.toLocaleDateString();   
    if (showWeek)   
    {    
        var Week = ['日','一','二','三','四','五','六'];   
        str += ' 星期' + Week[myDate.getDay()];   
    }   
    return str;   
}     
   
//+---------------------------------------------------   
//| 日期时间检查   
//| 格式为：YYYY-MM-DD HH:MM:SS   
//+---------------------------------------------------   
function CheckDateTime(str)   
{    
    var reg = /^(d+)-(d...{ 1,2 })-(d...{ 1,2 }) (d...{ 1,2 }):(d...{ 1,2 }):(d...{ 1,2 })$/;    
    var r = str.match(reg);    
    if(r==null)return false;    
    r[2]=r[2]-1;    
    var d= new Date(r[1],r[2],r[3],r[4],r[5],r[6]);    
    if(d.getFullYear()!=r[1])return false;    
    if(d.getMonth()!=r[2])return false;    
    if(d.getDate()!=r[3])return false;    
    if(d.getHours()!=r[4])return false;    
    if(d.getMinutes()!=r[5])return false;    
    if(d.getSeconds()!=r[6])return false;    
    return true;    
}    
   
//+---------------------------------------------------   
//| 把日期分割成数组   
//+---------------------------------------------------   
Date.prototype.toArray = function()   
{    
    var myDate = this;   
    var myArray = Array();   
    myArray[0] = myDate.getFullYear();   
    myArray[1] = myDate.getMonth();   
    myArray[2] = myDate.getDate();   
    myArray[3] = myDate.getHours();   
    myArray[4] = myDate.getMinutes();   
    myArray[5] = myDate.getSeconds();   
    return myArray;   
}   
   
//+---------------------------------------------------   
//| 取得日期数据信息   
//| 参数 interval 表示数据类型   
//| y 年 m月 d日 w星期 ww周 h时 n分 s秒   
//+---------------------------------------------------   
Date.prototype.DatePart = function(interval)   
{    
    var myDate = this;   
    var partStr='';   
    var Week = ['日','一','二','三','四','五','六'];   
    switch (interval)   
    {    
        case 'y' :partStr = myDate.getFullYear();break;   
        case 'm' :partStr = myDate.getMonth()+1;break;   
        case 'd' :partStr = myDate.getDate();break;   
        case 'w' :partStr = Week[myDate.getDay()];break;   
        case 'ww' :partStr = myDate.WeekNumOfYear();break;   
        case 'h' :partStr = myDate.getHours();break;   
        case 'n' :partStr = myDate.getMinutes();break;   
        case 's' :partStr = myDate.getSeconds();break;   
    }   
    return partStr;   
}   
   
//+---------------------------------------------------   
//| 取得当前日期所在月的最大天数   
//+---------------------------------------------------   
Date.prototype.MaxDayOfDate = function() 
{ 
　　var myDate = this; 
　　var ary = myDate.toArray(); 
　　var date1 = (new Date(ary[0],ary[1],1));
　　var date2 = date1.DateAdd('m',1); 
　　var result = date1.DateDiff('d',date2); 
　　return result; 
} 


//+---------------------------------------------------   
//| 字符串转成日期类型    
//| 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd   
//+---------------------------------------------------   
function StringToDate(DateStr)   
{    
   
    var converted = Date.parse(DateStr); 
    
    var myDate = new Date(converted);   
    if (isNaN(myDate))   
    {    
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';   
        var arys= DateStr.split('-');   
        myDate = new Date(arys[0],--arys[1],arys[2]);   
    }   
    return myDate;   
}

