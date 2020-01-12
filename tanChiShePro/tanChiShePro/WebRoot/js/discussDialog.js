⁮var check = 0;//
var time = 0;//
var selectStar=0;
var gridCommon;
$(document).ready(function(){
    initGrid();
    window.setTimeout(loadPingLun,500);
});

function initGrid(){
	$("#gbox_gridBox").remove();
	$("#gridPreDiv").after("<table id='gridBox'></table><div id='gridBoxPage'></div>");
	gridCommon = null;
	gridCommon = new jqgrid();
	var paramJson = {};
	paramJson.companyName = companyName;
//	paramJson.describe =$("#userName").val();
	
	gridCommon.colNames     = ['序号', '评论者','评论内容','评论日期', '评论序号','操作'];	//列名	
	gridCommon.url          = "userMessage/selectDiscuss";	//请求地址
	gridCommon.gridId       = "gridBox";				//表格加载div的id
	gridCommon.pageId       = "gridBoxPage";				//分页加载div的id
	gridCommon.paramJson    = paramJson;		        //查询传递参数
	gridCommon.autowidth    = true;			            //自动分配宽度
	gridCommon.height       =  "400px";				        //表格div的高度
	gridCommon.colModel     = [
				                {name:'index',	   			width:100,  editable:false, sortable:false, align:'center'},
				                {name:'pingLunName',   		width:200, editable:false, sortable:false, align:'left'},
				                {name:'pingLunContent',   	width:200, editable:false, sortable:false, align:'left'},
				                {name:'pingLunDate',		width:250, editable:false, sortable:false, align:'left'},
				                {name:'pingLunId',			width:250, editable:false, sortable:false, align:'left'},
				                {name:'option',				width:350, editable:false, sortable:false, align:'left'}
				                ];	//列参数
	gridCommon.setMultiSelect(false);       //全选功能
	gridCommon.setRowNum(10);
	gridCommon.isTitle = true;
	gridCommon.loadgrid();
	$(".ui-jqgrid-bdiv").css("background-color","white");
}

function loadPingLun(){
	document.getElementById('textarea').value ='';
	for(var i=0; i< gridCommon.getRowData().length;i++){
		var pingLunName		= gridCommon.getRowData()[i].pingLunName;
		var pingLunContent	= gridCommon.getRowData()[i].pingLunContent;
		var pingLunDate		= gridCommon.getRowData()[i].pingLunDate;
		var pingLunId		= gridCommon.getRowData()[i].pingLunId;
		document.getElementById('textarea').value += '昵称:'+pingLunName;
		document.getElementById('textarea').value += '\r\n'+pingLunDate;
		document.getElementById('textarea').value += '\r\n'+"留言:";
        document.getElementById('textarea').value += '\r\n'+pingLunContent;
        document.getElementById('textarea').value += '\r\n\r\n';
	}
}

function sendButton(){
	
//	alert("Asd");
//	return;
//	$.post(basePath+"discussOperation.action",{discuss_content:$("#inputtext").val(),username:username,data_id:data_id},function(data){
//		if(data=="success"){
//			initGrid();
//			window.setTimeout(loadPingLun,2000);
//		}
//	});
	var supportRoleinfo = {};
	supportRoleinfo.companyName = companyName;
	supportRoleinfo.pingLunName = username;
	supportRoleinfo.pingLunContent = $("#inputtext").val();
	var url = "userMessage/selectDiscuss";
	$.ajax( {
		url : url, //后台处理程序
		type : 'post', //数据发送方式
		dataType : "json",
		data : supportRoleinfo, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				initGrid();
				window.setTimeout(loadPingLun,500);
			} else {
				alertDialog.open( {
					container : 'alertBox',
					text : data.error
				});
			}
		}
	});
	
}

function tothisworkbench(person){
	window.open(basePath+"jsp/userMainPage.jsp"+"?username="+person, "newwindow", "height=800, width=1400, toolbar=yes, menubar=yes,scrollbars=yes, resizable=yes,location=yes,status=no");
}