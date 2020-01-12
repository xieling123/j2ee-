$(function(){
	
	var companyName 	 = userName;
	$("#companyName").attr("readonly","readonly");
	$("#companyName").val(companyName);
	if(operType=="edit"){
		initDetailParam();
	}
});

function initDetailParam(){

	var jobsName 	 = gridCommon.getCellsText(rowId, "jobsName");
	var jobsDesc 	 = gridCommon.getCellsText(rowId, "jobsDesc");
    var jobsYqJieShao= gridCommon.getCellsText(rowId, "jobsYqJieShao");
	var jobsMoney 	 = gridCommon.getCellsText(rowId, "jobsMoney");  
    var jobsPersons  = gridCommon.getCellsText(rowId, "jobsPersons");  
    
    
	$("#jobsName").val(jobsName);
	$("#jobsDesc").val(jobsDesc);
	$("#jobsYqJieShao").val(jobsYqJieShao);
	$("#jobsMoney").val(jobsMoney);
    $("#jobsPersons").val(jobsPersons);

}

function onOk(){
	var supportRoleinfo = {};
	var url = "managerCtrl/listCompanyFaBuMsg";
	if (operType == "edit") { //编辑
		supportRoleinfo._method='put';
		supportRoleinfo.id = rowId;
	}

	supportRoleinfo.companyName = $("#companyName").val();
	supportRoleinfo.jobsName 	= $("#jobsName").val();
	supportRoleinfo.jobsDesc 	= $("#jobsDesc").val();
	supportRoleinfo.jobsYqJieShao = $("#jobsYqJieShao").val();
	supportRoleinfo.jobsMoney     = $("#jobsMoney").val();
	supportRoleinfo.jobsPersons   = $("#jobsPersons").val();
	
	$.ajax( {
		url : url, //后台处理程序
		type : 'post', //数据发送方式
		dataType : "json",
		data : supportRoleinfo, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				modalUtil.hide();
				if (operType != "edit"){ //添加完跳到最后一页
					gridCommon.reload(true);
				} else { //编辑完跳到当前页，并选中编辑行
					cookie.set("gridRowId", rowId);
					gridCommon.reload(false);
				}
			} else {
				alertDialog.open( {
					container : 'alertBox',
					text : data.error
				});
			}
		}
	});
}