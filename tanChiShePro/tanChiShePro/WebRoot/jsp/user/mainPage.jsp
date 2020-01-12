<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    <title>用户界面</title>
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/ace.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/common/ace-rtl.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/page/main.css" type="text/css"/>
   
    <link rel="stylesheet" href="<%=basePath%>css/util/base.css" type="text/css"></link>
    <link rel="stylesheet" href="<%=basePath%>css/util/style_jqgrid.css" type="text/css"></link>
   	<link rel="stylesheet" href="<%=basePath%>assets/css/ui.jqgrid.css" type="text/css"></link>
    <link rel="stylesheet" href="<%=basePath%>css/util/modal.css" type="text/css"></link>
    
   <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/common/ace.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>/css/common/ace-rtl.min.css" type="text/css"/>
    <link rel="stylesheet" href="<%=basePath%>css/page/main.css" type="text/css"/>
   
    <link rel="stylesheet" href="<%=basePath%>css/util/base.css" type="text/css"></link>
    <link rel="stylesheet" href="<%=basePath%>css/util/style_jqgrid.css" type="text/css"></link>
   	<link rel="stylesheet" href="<%=basePath%>assets/css/ui.jqgrid.css" type="text/css"></link>
    <link rel="stylesheet" href="<%=basePath%>css/util/modal.css" type="text/css"></link>
    
    <!-- 日期插件 -->
	<link rel="stylesheet" href="<%=basePath%>assets/css/datepicker.css" />
	<link rel="stylesheet" href="<%=basePath%>assets/css/bootstrap-timepicker.css" />
	<link rel="stylesheet" href="<%=basePath%>assets/css/daterangepicker.css" />
	<link rel="stylesheet" href="<%=basePath%>css/svg_tips.css" type="text/css"></link>
	<link rel="shortcut icon" href="<%=basePath%>images/favicon.png">
	
    <script type="text/javascript" src="<%=basePath%>js/ace/ace-extra.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/util/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/ace/bootstrap.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/ace/ace-elements.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/ace/ace.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/util/messagebox.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/util/jqgrid-util.js"></script>
	
	<script type="text/javascript" src="<%=basePath%>js/util/cookie.js"></script>
  	<script type="text/javascript" src="<%=basePath%>js/util/jquery-input-rule.js"></script>
  	
  	<script type="text/javascript" src="<%=basePath%>js/util/dateFormat.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/util/DateFun.js"></script>
  	
  	<script type="text/javascript" src="<%=basePath%>assets/js/jquery-ui-1.10.3.custom.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>assets/js/jquery.ui.touch-punch.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>assets/js/chosen.jquery.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>assets/js/fuelux/fuelux.spinner.min.js"></script>
	
	<script type="text/javascript" src="<%=basePath%>assets/js/date-time/bootstrap-timepicker.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>assets/js/date-time/moment.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>assets/js/date-time/daterangepicker.min.js"></script>
	
	<script id="jqgridMin" 	      type="text/javascript" src="<%=basePath%>assets/js/jqGrid/jquery.jqGrid.min.js"></script>
	<script id="jqgridLocale"     type="text/javascript" src="<%=basePath%>assets/js/jqGrid/i18n/grid.locale-en.js"></script>
	<script id="datepicker"    	  type="text/javascript" src="<%=basePath%>assets/js/date-time/bootstrap-datepicker.min.js"></script>
	<script id="datepickerCN"     type="text/javascript" src="<%=basePath%>assets/js/date-time/bootstrap-datepicker.zh-CN.js"></script>
  	<script type="text/javascript" src="js/lhgcore.js"></script>
    <script type="text/javascript" src="js/lhgdialog.js"></script>
  	<script>
  		var basePath="<%=basePath%>";
  		var userName="<%=request.getParameter("userName")%>";
  		var isFlag  ="<%=request.getParameter("isFlag")%>";
  		var grade   ="<%=request.getParameter("grade")%>";
  		var customsPass  ="<%=request.getParameter("customsPass")%>";
  		var userId="";
  	</script>
  </head>
  <body>
    <div class="topBox">
  		<div class="logoContainer">
	  		<p id="userLabel"style="font-size: 28px;"></p>
	  	</div>
	  	<div class="navContent">
	  		<ul>
				<li><a id="1" href="javascript:void(0);" onclick="showPage(1)" class="firstMenu">历史记录信息</a></li>
				<li><a id="2" href="javascript:void(0);" onclick="showPage(2)" class="firstMenu">个人信息</a></li>
				<li><a id="3" href="javascript:void(0);" onclick="showPage(3)" class="firstMenu">贪吃蛇游戏</a></li>
				<li><a id="4" href="javascript:void(0);" onclick="showPage(4)" class="firstMenu" style="border:0px solid">注销</a></li>				 			
	  		</ul>
	  	</div>
  	</div>
  	<div id="mainDiv" class="mainDiv"></div>
  </body>
   <script>
  	$(function(){
  		$("#userLabel").text("用户名："+userName);
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
					userId=data.rows[0].id;
					showPage(1);
					//如果是1,那么是玩游戏进入的
					if(isFlag == 1){
						var regisMsg={};
						//regisMsg.userName		=	userName;
						regisMsg.userId	        =	userId;
						regisMsg.customsPass	=	customsPass;
						regisMsg.grade	        =	grade;
						
						$.ajax( {
								url : "userOper/listHistoricalRec", //后台处理程序
								type : 'POST', //数据发送方式
								dataType : "json",
								data : regisMsg, //要传递的数据；就是上面序列化的值
								success : function(data) { //回传函数
									if (data.code == 1) {
										alert("游戏记录已保存.");
										$(".mainDiv").load("jsp/user/historicalRecPage.jsp");
									} else {
										alert(data.msg);
									}
								}
						});						
					}
				} else {
					alert(data.error);
				}
			}
		});
  	});
  	function showPage(type){
  		switch(type){
			case 1: $(".mainDiv").load("jsp/user/historicalRecPage.jsp"); break;
			case 2:	$(".mainDiv").load("jsp/user/myMessagePage.jsp"); break;
			//case 3:	$(".mainDiv").load("jsp/user/tanChiShePage.jsp"); break;
			case 3:	window.open("jsp/user/index.jsp?userName="+userName + "&userId=" + userId,"_blank"); window.close();break;
			case 4:	window.open("jsp/loginRegister/loginRegister.jsp","_self"); break;
			default:$(".mainDiv").load("jsp/user/historicalRecPage.jsp"); break;
  		}
  	}
  </script>
</html>