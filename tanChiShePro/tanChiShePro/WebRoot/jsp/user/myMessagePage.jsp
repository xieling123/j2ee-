<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/loginRegister/common.css">
	<link rel="stylesheet" type="text/css" href="<%=basePath%>css/loginRegister/login.css">
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/ace.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/common/ace-rtl.min.css" type="text/css"/>
  </head>
  
  <body>
	<div class="login_cont" style="margin:0px;width:100%;">
		<div class="input_signup active" style="width:300px;position:relative;left:calc(50% - 150px);top:50px">
			<label>用户名:</label>
			<input class="input" id="user_name" type="text" aria-label="用户名（包含字母／数字／下划线" placeholder="用户名">
			<div class="hint">请填写符合格式的用户名</div>			
			<label>密码:</label>
			<input class="input" id="user_userPwd" type="text" aria-label="密码" placeholder="密码">
			<div class="hint">请填密码</div>
			<label>头像:</label>
			<input class="input" id="user_touXiangUrl" type="text" aria-label="头像" placeholder="头像">
			<div class="hint">请填密码</div>			
			<label>描述 :</label><br>
			<textarea class="input" id="user_userDesc" style="width:300px"></textarea>			
			<br><br><br>
			<input type="submit" id="submit" class="button" name="button" value="确认" onclick="updateMessage()">
		</div>
		
	</div>
  <script type="text/javascript" src="<%=basePath%>js/user/myMessagePage.js"></script>  
  </body>
</html>