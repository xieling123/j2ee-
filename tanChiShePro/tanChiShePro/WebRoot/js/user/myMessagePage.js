$(function(){
	
	initMyMessage();
	
});

function initMyMessage(){
	
	var supportRoleinfo = {};
	var url = "userOper/listUser";
	
	supportRoleinfo.userName = userName;
	
	$.ajax( {
		url : url, //后台处理程序
		type : 'get', //数据发送方式
		dataType : "json",
		data : {'param':JSON.stringify(supportRoleinfo)}, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				$("#user_name").attr("readonly","readonly");
				$("#user_name").val(userName);
				$("#user_userPwd").val(data.rows[0].userPwd);
				$("#user_touXiangUrl").val(data.rows[0].touXiangUrl);
				$("#user_userDesc").val(data.rows[0].userDesc);
			} else {
				alert(data.error);
			}
		}
	});
	
}

function updateMessage(){
	
	alert(userId);
	return;
	if(!check()){
		return;
	}
	
	var supportRoleinfo = {};
	var url = "userOper/user";
	supportRoleinfo._method='put';
	
	supportRoleinfo.id			= userId;
	supportRoleinfo.userName 	= $("#user_name").val();
	supportRoleinfo.userPwd 	= $("#user_userPwd").val();
	supportRoleinfo.touXiangUrl = $("#user_touXiangUrl").val();
	supportRoleinfo.userDesc    = $("#user_userDesc").val();
	
	$.ajax( {
		url : url, //后台处理程序
		type : 'post', //数据发送方式
		dataType : "json",
		data : supportRoleinfo, //要传递的数据；就是上面序列化的值
		success : function(data) { //回传函数
			if (data.code == 1) {
				alert("确认成功");
			} else {
				alert("确认失败");
			}
		}
	});
	
	
	
}

function check(){
	if($("#user_name").val() ==''){
		alert("用户名不能为空.");
		return false;
	}
	if($("#user_touXiangUrl").val() ==''){
		alert("选择头像,不能为空.");
		return false;
	}
	if($("#user_userDesc").val() ==''){
		alert("用户描述不能为空.");
		return false;
	}
	if($("#user_userPwd").val() ==''){
		alert("用户密码不能为空.");
		return false;
	}
	if($("#user_reuserPwd").val() != $("#user_userPwd").val()){
		alert("两次密码不一致.");
		return false;
	}
	return true;
}