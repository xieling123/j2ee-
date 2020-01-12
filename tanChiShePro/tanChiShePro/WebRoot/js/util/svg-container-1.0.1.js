//**************************************************************
 // * 
 // SVG图形包   V1.0.1
 // Author: locust
 // Date:   2016-12-08
 // */
//-------------------------- 图元定义 ----------------------------
var GRAPH_ITEMTYPE_VOID		 =	0;	//空
var GRAPH_ITEMTYPE_LINE		 =	1;	//线
var GRAPH_ITEMTYPE_RECT		 =	2;	//矩形
var GRAPH_ITEMTYPE_ELLIPSE	 =	3;	//椭圆
var GRAPH_ITEMTYPE_ARC		 =	4;	//圆弧
var GRAPH_ITEMTYPE_POLYLINE	 =	5;	//折线
var GRAPH_ITEMTYPE_POLYGON	 =	6;	//多边形区域
var GRAPH_ITEMTYPE_BEZIER	 =	7;	//贝塞尔曲线
var GRAPH_ITEMTYPE_TEXT		 =	8;	//文本
var GRAPH_ITEMTYPE_BUTTON	 =	9;	//按钮
var GRAPH_ITEMTYPE_HOT		 =	10;	//热点
var GRAPH_ITEMTYPE_IMAGE	 =	11;	//图像
var GRAPH_ITEMTYPE_TABLE	 =	12;	//表单
var GRAPH_ITEMTYPE_HOTDOT	 =	13;	//焊点

var GRAPH_ITEMTYPE_YC		 =	20;  //遥测
var GRAPH_ITEMTYPE_YX		 =	21;  //遥信 
var GRAPH_ITEMTYPE_CURVE	 =	22;  //曲线
var GRAPH_ITEMTYPE_BAR		 =	23;  //棒图
var GRAPH_ITEMTYPE_DYNAMIC   =  24;  //动态量	
var GRAPH_ITEMTYPE_FLOWLINE  =  25;  //潮流线
var GRAPH_ITEMTYPE_LIGHTCARD =  26;  //光字牌
var GRAPH_ITEMTYPE_PANE		 =  27;  //仪表盘
var GRAPH_ITEMTYPE_ADJUST	 =  28;  //调节图元
var GRAPH_ITEMTYPE_DYNCEND   =  31;  //动态量结束

var GRAPH_ITEMTYPE_DEVYC	 =	39;  //量测

//下面为电力对象定义
var GRAPH_ITEMTYPE_DEVLINK	 =	40;  //连接线
var GRAPH_ITEMTYPE_DEVKG	 =	41;  //开关
var GRAPH_ITEMTYPE_DEVBUS	 =	42;	//母线
var GRAPH_ITEMTYPE_DEVLINE	 =	43;	//线路 
var GRAPH_ITEMTYPE_DEVTRANS	 =	44;	//变压器 
var GRAPH_ITEMTYPE_DEVCAP	 =	45;  //电容   
var GRAPH_ITEMTYPE_DEVSIS	 =	46;  //电亢   
var GRAPH_ITEMTYPE_DEVGEN	 =	47;  //发电机 
var GRAPH_ITEMTYPE_DEVLOAD	 =	48;  //负荷   
var GRAPH_ITEMTYPE_DEVDZ	 =	49;  //刀闸
var GRAPH_ITEMTYPE_DEVROD	 =	50;	//避雷器 
var GRAPH_ITEMTYPE_DEVCT	 =	51;  //电流互感器  
var GRAPH_ITEMTYPE_DEVPT	 =	52;  //电压互感器  
var GRAPH_ITEMTYPE_DEVPROT	 =	53;  //保护装置(网门)
var GRAPH_ITEMTYPE_DEVXHXQ	 =	54;  //消弧线圈
var GRAPH_ITEMTYPE_DEVGROUND =	55;  //接地符   
var GRAPH_ITEMTYPE_DEVEND	 =	56;  //电力对象结束

var GRAPH_ITEMTYPE_END		 =	100; //所有图符结束

var gRunState = 0;                   //运行态
var gAdornFields = null;			 //图形装饰域
var gSvgParaFields = null;	 		 //SVG参数

var gBlinkCount = 0;

$(function(){

	initSVGContainer();

	setInterval(freshSVGData, 5000*1);
	setInterval(flashSVGGraph, 1000);
});

//**********************************SVG图形处理***********************************
//初始化SVG图形容器
function initSVGContainer()
{
	loadAdornFields();
}

//加载图形装饰域
function loadAdornFields()
{
	$.post("yunwei/base/adornFieldAction!queryAdornFields.action",
	{
	}, 
	function(data) {
		if (data != ""){		
			gAdornFields = eval("("+data+")");
			
			loadSVGContainer();
		}
	});
}

//加载SVG容器
function loadSVGContainer() {
	var paramJson = {};	
	paramJson.substno = 1;
	paramJson.filename= "home.svg";
	var strData = JSON.stringify(paramJson);

	$.post("yunwei/svg/sVGAction!querySVGByFile.action",
	{
		param:strData
	}, 
	function(data) {
		if (data != ""){
			$("#svg_container").html(data);			
			parseSVGPara();
		}
	});
}

//获取当前图元的图形装饰域
function getAdornFieldsNames(runstate, itemtype, adornFields)
{
	if (adornFields == null) return null;
	
	var adornFieldsNames = new Array();
	
	for (var i = 0; i < adornFields.length; i++) {
		if (runstate == -1 || adornFields[i].runstate == runstate) {
			if (itemtype == -1 || adornFields[i].objtype == itemtype) {
				var matchflag = 0;
				for (var j = 0; j < adornFieldsNames.length; j++) {
					if (adornFields[i].fieldname == adornFieldsNames[j])
						matchflag = 1;
				}
	
				if (matchflag == 0) {
					adornFieldsNames.push(adornFields[i].fieldname);
				}
			}
		}
	}
			
	return adornFieldsNames;	
}

function GetAdornFieldInfo (runstate, objtype, fieldname, fieldval, adornFields)
{
	if (adornFields == null)  return null;

	if (objtype <= GRAPH_ITEMTYPE_VOID || objtype >= GRAPH_ITEMTYPE_END) return null;

	var adornFieldInfo = new Array(); 

	for (var i = 0; i < adornFields.length; i++) {
		if (runstate == -1 || adornFields[i].runstate == runstate) {
			if (objtype == -1 || adornFields[i].objtype == objtype) {
				if (fieldname == null || adornFields[i].fieldname == fieldname) {
					if (fieldval == -1 || adornFields[i].fieldvalue  == fieldval) {
						adornFieldInfo.push(adornFields[i]);
					}
				}
			}
		}
    }

    return adornFieldInfo;
}

function buildAdornFieldParam(id, fieldname)
{
	if (id == null || id == "") return null;
	
	var ids = id.toString().split("@");
	
	return ids[0]+"@"+ids[1]+"@"+ids[2]+"@"+ fieldname +"@"+ids[4];
}

function getSVGParaField(id)
{
	if (id == null || gSvgParaFields == null) return null;
	
	for (var i = 0; i < gSvgParaFields.length; i++) {
		var param = gSvgParaFields[i];
		if (param == null) continue;
		
		if (param.id == id)  return param;
	}
	
	return null;
}

function getValueById(id)
{
	if (id == null) return 0.0;

	if (gSvgParaFields == null) return 0.0;
	
	 for (var i = 0; i < gSvgParaFields.length; i++) {
		 var param = gSvgParaFields[i];
		 if (param == null) continue;
		 
		 if (param.id == id) {			 
			 return param.value;
		 }
	 }
	 
	 return 0.0;
}

//得到值列表(value + adornFieldCount)  含图形装饰域状态
function  getValues(id, adornFieldNames)
{
	if (id == null) return null;
	
	var values = new Array();
	
	var val = getValueById(id);	
	values.push(val);
	
	
	//附加装饰域数据
	for (var i = 0; i < adornFieldNames.length; i++) {
		var _id = buildAdornFieldParam(id, adornFieldNames[i]);
		var _val = getValueById(_id);
		
		values.push(_val);
	}
	
	return values;
}

function toSVGColor(clrValue)
{	
	var red  = clrValue % 256 ;  
	var green = ((clrValue - red) / 256) % 256;
	var blue  = ((clrValue - green * 256 - red) / (256*256)) % 256;
	
	var color = "rgb(" + red +"," + green + "," + blue +")";
	
	
	return color	
}

//解析SVG请求参数
function parseSVGPara() {
	gSvgParaFields = [];
	
	var nodes = $("#svg_container svg g");
	if (nodes.length > 0) {
		for (var i=0; i < nodes.length; i++) {
			var id = nodes[i].id.toString();
			if ((id == null) || (id =="")) continue;
			
			var typeid = null;
			var attributeNode = document.getElementById(id).getAttributeNode("typeid");
			if (attributeNode != null) typeid = attributeNode.value;

			if ((typeid == null) || typeid < 0) continue;
			
			if (typeid < GRAPH_ITEMTYPE_YC) continue;
			
			var adornFieldsNames = getAdornFieldsNames(gRunState, typeid, gAdornFields);
			if (adornFieldsNames == null) continue;
				
			if (typeid == GRAPH_ITEMTYPE_YC || typeid == GRAPH_ITEMTYPE_YX) { //遥测/遥信
				var paramJson = {};
				paramJson.id = id;	paramJson.value = 0.0;
				
				gSvgParaFields.push(paramJson);
								
				for (var j = 0; j < adornFieldsNames.length; j++) {
					var paramJson = {};
					
					paramJson.id = buildAdornFieldParam(id, adornFieldsNames[j]);
					paramJson.value = 0.0;
					gSvgParaFields.push(paramJson);
				}
			}
		}
	}

	//返回立即请求数据
	freshSVGData();
}

//刷新SVG数据
function freshSVGData(){
	if (gSvgParaFields == null || gSvgParaFields.length <= 0) return;
	
	var strData = JSON.stringify(gSvgParaFields);
	$.post("yunwei/svg/sVGAction!loadRealData_SVG.action",
	{
		param:strData
	}, 
	function(data) {
		if(data != "" && data != "error"){
			var json = eval('(' + data + ')');
			for (var i = 0; i < json.length; i++){
				var param = getSVGParaField(json[i].id);
				if (param == null) continue;
				
				param.value = json[i].value;
			}
			
			freshSVGGraph();
		}
	});
}

//刷新SVG图形画面
function freshSVGGraph()
{
	FreshAllDyncPixel();
	
	FreshAllRealPixel();
}

//闪烁SVG图形画面
function flashSVGGraph()
{
	gBlinkCount ++;
    gBlinkCount %= 3;  //闪烁次数 2

	FreshAllRealPixel();
}

function FreshAllDyncPixel()
{
	var nodes = $("#svg_container svg g");
	if (nodes.length > 0) {
		for (var i=0; i < nodes.length; i++) {
			var id = nodes[i].id.toString();
			if ((id == null) || (id =="")) continue;
			
			var typeid = null;
			var attributeNode = document.getElementById(id).getAttributeNode("typeid");
			if (attributeNode != null) typeid = attributeNode.value;
			
			if ((typeid == null) || typeid < 0) continue;			
			
			if (typeid == GRAPH_ITEMTYPE_YC) {
				freshOneYc(nodes[i], typeid);
			}
			else if (typeid == GRAPH_ITEMTYPE_BAR) {
				//FreshOneBar(painter, item, FreshMode);
			}
			else if (typeid == GRAPH_ITEMTYPE_LIGHTCARD) { //光字牌
				//FreshOneLightCard(painter, item, FreshMode);
			}

         }
	}
}

function FreshAllRealPixel()
{
	var nodes = $("#svg_container svg g");
	if (nodes.length > 0) {
		for (var i=0; i < nodes.length; i++) {
			var id = nodes[i].id.toString();
			if ((id == null) || (id =="")) continue;
			
			var typeid = null;
			var attributeNode = document.getElementById(id).getAttributeNode("typeid");
			if (attributeNode != null) typeid = attributeNode.value;
			
			if ((typeid == null) || typeid < 0) continue;			
			
			if (typeid == GRAPH_ITEMTYPE_YX) {
				freshOneYx(nodes[i], typeid);
			}
         }
	}
}

//刷新单个遥测
function freshOneYc(g, typeid) {
	if (g == null) return;
	
	var id = g.id.toString();
	if ((id == null) || (id =="")) return;
	
	var adornFieldsNames = getAdornFieldsNames(gRunState, typeid, gAdornFields);
	var values = getValues(id, adornFieldsNames)
	
	
	var addornFieldInfo = GetAdornFieldInfo (gRunState, typeid, null, -1, gAdornFields)

	
	var backgroundColor = "none";	

	if (addornFieldInfo != null) {
		var MatchFlag = 0;
		for (var i = 0; i < adornFieldsNames.length; i++)	{
			for (var j = 0; j < addornFieldInfo.length; j++)	{
				if (values[i + 1] == addornFieldInfo[j].fieldval)	{
					backgroundColor = toSVGColor(addornFieldInfo[j].backcolor);
					MatchFlag = 1;
					break;
				}
			}
			if (MatchFlag == 1) break;
		}
	}

	
	var attributeNode = document.getElementById(id);
	if (attributeNode == null) return;
		
	var  rectElement = attributeNode.getElementsByTagName("rect")[0];
	var  textElement = attributeNode.getElementsByTagName("text")[0];
	
	if (rectElement != null) rectElement.setAttribute("fill",backgroundColor);
	if (textElement != null) textElement.textContent = (values[0] == null || values[0] == "") ?  "null" : values[0];
	
}

//刷新单个遥信
function freshOneYx(g, typeid){
	if (g == null) return;
	
	var id = g.id.toString();
	if ((id == null) || (id =="")) return;
	
	var adornFieldsNames = getAdornFieldsNames(gRunState, typeid, gAdornFields);
	var values = getValues(id, adornFieldsNames)
	
	
	var addornFieldInfo = GetAdornFieldInfo (gRunState, typeid, null, -1, gAdornFields)
	
	var backgroundColor = "none"	
	
	var blinkFlag = 0;
	if (addornFieldInfo != null) {
		var MatchFlag = 0;
		for (var i = 0; i < adornFieldsNames.length; i++)	{
			for (var j = 0; j < addornFieldInfo.length; j++)	{
				if (values[i + 1] == addornFieldInfo[j].fieldval)	{
					if (blinkFlag == 0) {
						blinkFlag = addornFieldInfo[j].flashflag;
					}

					backgroundColor = toSVGColor(addornFieldInfo[j].backcolor);
					MatchFlag = 1;
					break;
				}
			}
			if (MatchFlag == 1) break;
		}
	}
	
	var attributeNode = document.getElementById(id);
	if (attributeNode == null) return;
	
	
	if (values[0] > 0) {
		backgroundColor = attributeNode.getAttributeNode("on_color").value;
	}
	else {
		backgroundColor = attributeNode.getAttributeNode("off_color").value;
	}
	
	if (blinkFlag > 0 && gBlinkCount >= 2) {
		backgroundColor = attributeNode.getAttributeNode("flash_color").value;
	}
	
	var type = attributeNode.getAttributeNode("type").value;
	
	if (type == "YX@KG_RECT"){ //开关
		var  rectElement = attributeNode.getElementsByTagName("use")[0];
		if (rectElement != null) rectElement.setAttribute("fill",backgroundColor);
	}
}

//**********************************遥测单击响应***********************************
function onYCClick(evt) {
	var obj = evt.target;
	alert(obj.nodeName);
}

//**********************************遥测移动响应***********************************
function onYCMouseMove(evt) {
	
}

function onMouseOut(evt) {
	var obj = evt.target;
	alert(obj.nodeName);
}
