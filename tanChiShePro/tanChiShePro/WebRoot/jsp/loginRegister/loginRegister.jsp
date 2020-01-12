<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>"> 
    <title>登录页</title>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/loginRegister/common.css">
	<link rel="stylesheet" type="text/css" href="<%=basePath%>css/loginRegister/login.css">
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/ace.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/common/ace-rtl.min.css" type="text/css"/>	
    <link rel="shortcut icon" href="<%=basePath%>images/arrow.png">
  	<script type="text/javascript" src="<%=basePath%>js/loginRegister/jquery.js"></script>
  	
  	<script type="text/javascript">
  		var basePath='<%=basePath%>';
  	</script>
  </head>
  
  <body>
	<div class="login_cont">
		<div class="login_nav">
			<div class="nav_slider">
				<a href="javascript:void(0);" class="signup">注册</a>
				<a href="javascript:void(0);" class="signin  focus">登录</a>
			</div>
		</div>
			<div class="input_signup">
				<input class="input" id="user_name" type="text" aria-label="用户名（包含字母／数字／下划线" placeholder="用户名">
				<div class="hint">请填写符合格式的用户名</div>
				<input class="input" id="user_describe" type="text" aria-label="描述" placeholder="描述">
				<div class="hint">请填写描述</div>
				<input class="input" id="user_touXiangUrl" type="text" class="account" aria-label="头像" placeholder="头像">
				<div class="hint">请填写头像</div>
				<input class="input" id="user_password" type="password" aria-label="密码" placeholder="密码（不少于 6 位）">
				<div class="hint">请填写符合格式的密码</div>
				<input class="input" id="user_repassword" type="password" aria-label="密码" placeholder="再次输入密码">
				<div class="hint">请再次输入密码</div>
				<div class="space-20"></div>
				<input type="submit" id="submit" class="button" name="button" value="注册">
			</div>
			<div class="input_signin  active">
				<input class="input" id="login_user_name" type="text" aria-label="用户名" placeholder="用户名">
				<div class="hint">请输入用户名</div>
				<input class="input" id="login_password" type="password" aria-label="密码" placeholder="密码">
				<div class="hint">请输入密码</div>
				<div class="space-30"></div>
				<input type="submit" id="button" class="button" name="button" value="登录">
			</div>
	</div>
    <script type="text/javascript" src="<%=basePath%>js/loginRegister/login.js"></script>
<!--	<script type="text/javascript" src="<%=basePath%>js/loginRegister/form.js"></script> -->
	<script type="text/javascript" src="<%=basePath%>js/loginRegister/login_ajax.js"></script>
  </body>
</html>
