var gridCommon;
var singerId = null;
$(function(){
	initGrid();
	loadMostGrateUser();
});

function loadMostGrateUser(){
	var supportRoleinfo = {};
	var url = "userOper/mostGradeUser";

	$.ajax( {
		url : url, //后台处理程序
		type : 'get', //数据发送方式
		dataType : "json",
		data : {'param':JSON.stringify(supportRoleinfo)}, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				$("#mostUser").val(data.rows[0].mostUser);
				$("#mostGrade").val(data.rows[0].mostGrade);
				$("#mostCustomsP").val(data.rows[0].mostCustomsP);
				$("#mostTime").val(data.rows[0].mostTime);
			} else {
				alert(data.error);
			}
		}
	});
}

function initGrid(){
	$("#gbox_gridBox").remove();
	$("#gridPreDiv").after("<table id='gridBox'></table><div id='gridBoxPage'></div>");
	gridCommon = null;
	gridCommon = new jqgrid();
	var paramJson = {};
	var orderDesc = $("#orderDesc").val();
 	paramJson.userName  = orderDesc;
 	
	gridCommon.colNames     = ['序号', '头像','用户名称','用户描述', '分数', '关卡','时间'];	//列名	
	gridCommon.url          = "userOper/listHistoricalRec";	//请求地址
	gridCommon.gridId       = "gridBox";				//表格加载div的id
	gridCommon.pageId       = "gridBoxPage";			//分页加载div的id
	gridCommon.paramJson    = paramJson;		        //查询传递参数
	gridCommon.autowidth    = true;			            //自动分配宽度
	gridCommon.height       =  "calc(100vh - 265px)";				        //表格div的高度
	gridCommon.colModel     = [
				                {name:'index',	   			width:150, editable:false, sortable:false, align:'center'},
				                {name:'touXiangUrl',		width:250, editable:false, sortable:false, align:'left'},
				                {name:'userName',			width:250, editable:false, sortable:false, align:'left'},
				                {name:'userDesc',			width:250, editable:false, sortable:false, align:'left'},
				                {name:'grade',   			width:200, editable:false, sortable:false, align:'left'},
				                {name:'customsPass',		width:250, editable:false, sortable:false, align:'left'},
				                {name:'time',				width:250, editable:false, sortable:false, align:'left'}
				               ];	//列参数
	gridCommon.setMultiSelect(true);       //全选功能
	gridCommon.setIsTitle(true);
	gridCommon.setRowNum(10);
	gridCommon.loadgrid();
}

//按条件搜索
function onSearch(){
	initGrid();
}

function onDelete(){
	var ids = gridCommon.getSelectedRowIds();
	if(ids != ""){
		if (ids.length == 0) {
		    alert("至少选择一条记录.");
			return ;
		}
		$.ajax({
			url : "userOper/historicalRec/"+ids, //后台处理程序
			type : 'post', //数据发送方式
			dataType :"json",
			data :  {
					 _method : "delete"
	            },      //要传递的数据；就是上面序列化的值
			success : function(data) { //回传函数
				if (data.code == 1 ) {
					gridCommon.reload(); 
				}
				else{
					alert(data.msg);
				}
			}
		});
	}else{
		alert("至少选择一条记录.");
	}
}