<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'huFuPinPage.jsp' starting page</title>
    <link rel="STYLESHEET" type="text/css" href="<%=basePath%>css/page/distributionChartsMain.css"/> 
  </head>
  
  <body>
	<div class="col-xs-12">
  		<div class="space-6"></div>
   		<div class="titleBox">
   			<div class="atrContent">
   			   	<div class="col-sm-2 floatLeft">
   					<input type="text" id="orderDesc" style="height: 34px" placeholder="请输入名称">
	   			</div>
	   			<button type="button" class="btn btn-purple btn-sm ml10" onclick="onSearch()">
	   					搜索
	   					<i class="icon-search icon-on-right"></i>
	   			</button>
	   			<div class="floatRight" style="width:950px">
	   				<label class="control-label col-sm-1  no-padding-right">用户名:</label>
					<input class="control-label col-sm-2  no-padding-right" type="text" id="mostUser" style="height: 34px" readOnly="readonly">
					<label class="control-label col-sm-1  no-padding-right">最高分:</label>
					<input class="control-label col-sm-1  no-padding-right" type="text" id="mostGrade" style="height: 34px" readOnly="readonly">
					<label class="control-label col-sm-1  no-padding-right">关卡:</label>
					<input class="control-label col-sm-1  no-padding-right" type="text" id="mostCustomsP" style="height: 34px" readOnly="readonly">
					<label class="control-label col-sm-1  no-padding-right">时间:</label>
					<input class="control-label col-sm-2  no-padding-right" type="text" id="mostTime" style="height: 34px" readOnly="readonly">
   					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   					<button type="button" class="btn btn-danger btn-sm" onclick="onDelete()">
   						删除
   						<i class="icon-remove icon-on-right"></i>
   					</button>	
   				</div> 	   			   			   			
   			</div>
   		</div>
   </div>
   <div class="col-xs-12 progressRate colorSet" >
		<div id="gridPreDiv"  class="space-6"></div>
		<table id="gridBox"></table>
		<div id="gridBoxPage"></div>
   </div>
    <script type="text/javascript" src="js/user/historicalRecPage.js"></script>  
  </body>
</html>