var gridCommon;
var companyName = userName;
$(function(){
	initGrid();
})

function initGrid(){
	$("#gbox_gridBox").remove();
	$("#gridPreDiv").after("<table id='gridBox'></table>");
	gridCommon = null;
	gridCommon = new jqgrid();
	var paramJson = {};
	var userDescribe = $("#userDescribe").val();
 	paramJson.describe =userDescribe;
	paramJson.companyName =userName;
	gridCommon.colNames     = ['序号', '求职者名称','求职者地址', '求职者联系方式','求职者年龄','求职者性别', '操作'];	//列名	
	gridCommon.url          = "managerCtrl/listUserAndCompanyMsg";	//请求地址
	gridCommon.gridId       = "gridBox";				//表格加载div的id
	//gridCommon.pageId       = "gridBoxPage";				分页加载div的id
	gridCommon.paramJson    = paramJson;		        //查询传递参数
	gridCommon.autowidth    = true;			            //自动分配宽度
//	gridCommon.setMultiSelect(true);       //全选功能
	gridCommon.height       = "calc(100vh - 285px)";				        //表格div的高度
	gridCommon.colModel     = [
				                {name:'index',	   		width:60,  editable:false, sortable:false, align:'center'},
				                {name:'userName',   	width:200, editable:false, sortable:false, align:'left'},
				                {name:'userAddress',	width:250, editable:false, sortable:false, align:'left'},
				                {name:'userTel',   		width:200, editable:false, sortable:false, align:'left'},
				                {name:'userOld',		width:250, editable:false, sortable:false, align:'left'},
				                {name:'userSex',		width:200, editable:false, sortable:false, align:'left'},
				                {name:'option',			width:200, editable:false, sortable:false, align:'left'}
				               ];	//列参数
	gridCommon.setMultiSelect(true);       //全选功能
	gridCommon.setRowNum(1000);
	gridCommon.loadgrid();
}

//按条件搜素
function onSearch(){
	userName = companyName;
	initGrid();
}

function onAdd(){
	var url="jsp/manager/model/userAddEdit.jsp?"+"operType="+"add";
	
	modalUtil.setModalWidth(650);
	modalUtil.setModalHeight(450);
	modalUtil.setHeaderText("用户配置")
	modalUtil.setBodyUrl(url);
			
	modalUtil.show();
			
	modalUtil.setClickListener(function(){onOk()});
}

function editData(rowId){
	
	var userName1 	 = gridCommon.getCellsText(rowId, "userName");
	userName = userName1;
	var url=basePath+"jsp/user/myMessagePage.jsp?type=1";
	
	modalUtil.setModalWidth(650);
	modalUtil.setModalHeight(450);
	modalUtil.setHeaderText("求职者详情")
	modalUtil.setBodyUrl(url);
			
	modalUtil.show();
			
	modalUtil.setClickListener(function(){});
}

function showTest(userName){
	
	var supportRoleinfo = {};
	supportRoleinfo.userName = userName;
	supportRoleinfo.companyName = companyName;
	
	$.ajax( {
		url : "managerCtrl/listUserAndCompanyMsg", //后台处理程序
		type : 'post', //数据发送方式
		dataType : "json",
		data : supportRoleinfo, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				alert("面试邀请已发送给\""+userName+"\"");				
			} else {
				alert("面试邀请发送失败");
			}
		}
	});
	

}

