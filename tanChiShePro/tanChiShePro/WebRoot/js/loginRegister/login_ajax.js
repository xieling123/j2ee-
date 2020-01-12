
$(function(){
	$("#submit").click(function(event){
		if($("#user_name").val()==''||$("#user_password").val()==''){
			alert("用户名或密码不能为空.");
			return;
		}
		
		var regisMsg={};
		regisMsg.userName		=	$("#user_name").val();
		regisMsg.userPwd	    =	$("#user_password").val();
		regisMsg.touXiangUrl	=	$("#user_touXiangUrl").val();
		regisMsg.userDesc	    =	$("#user_describe").val();
		
		$.ajax( {
				url : "userOper/user", //后台处理程序
				type : 'POST', //数据发送方式
				dataType : "json",
				data : regisMsg, //要传递的数据；就是上面序列化的值
				success : function(data) { //回传函数
					if (data.code == 1) {
						location.href = basePath+"jsp/loginRegister/loginRegister.jsp";
					} else {
						alert(data.msg);
					}
				}
		});
	})
})

$(function(){	
	$("#button").click(function(event){		
		if($("#login_user_name").val()==''||$("#login_password").val()==''){
			alert("用户名或密码不能为空.");
			return;
		}
		
		var loginMsg={};
		loginMsg.loginName = $("#login_user_name").val();
		loginMsg.loginPwd  = $("#login_password").val();

		$.ajax( {
				url : "userOper/user", //后台处理程序
				type : 'get', //数据发送方式
				dataType : "json",
				data : {'param':JSON.stringify(loginMsg)}, //要传递的数据；就是上面序列化的值
				success : function(data) { //回传函数
					if (data.code == 1) {
						location.href = basePath+"jsp/user/mainPage.jsp?userName=" + $("#login_user_name").val() + "&isFlag=" + 0;
					} else {
						alert(data.msg);
					}
				}
		});
	})
})