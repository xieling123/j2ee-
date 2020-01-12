var tipShow = new tipsUtil();
var id = "";
$(function() {
	initDataItems();
	$(".svgshow").load(basePath + "svgfile/" + svgUrl, function() {
		searchSvgData("svg/MpTip");
//		loadMeterData();
	});

//	window.setInterval("loadMeterData()", 1000 * 60);
});

function loadMeterData(){
	
	var nodes = $("g[id^='meter']");
	var meterIds = new Array();
	for ( var i = 0; i < nodes.size(); i++) {
		var paramJson = {};
		paramJson.rtuId = nodes[i].id.split("_")[1];
		paramJson.mpId = nodes[i].id.split("_")[2];
		meterIds[i] = paramJson;
	}
	
	$.ajax({
		url : basePath + "svg/meterData",
		type : "get",
		dataType : "json",
		data : {
			queryJsonStr : JSON.stringify(meterIds)
		},
		success : function(data) {
			var json = data.jsonData;
			for ( var key in json) {
				var text = document.getElementById(key);
				if (text != null) {
					$("#" + key).text(json[key]);
				}
			}
		},
		error:function(data){
//			console.log(data);
//			alert(data.msg);
		}
		
	});
}

function initDataItems() {
	$("#ace-settings-navbar").attr("checked", true);
	$("#ace-settings-sidebar").attr("checked", true);
	$("#ace-settings-breadcrumbs").attr("checked", true);
	$("#ace-settings-rtl").attr("checked", true);
}

function searchSvgData(url) {
	//返回按钮绑定事件
	returnBtn();
	//tips加载测点详情数据
	loadMeterDetail(url);
}

//返回按钮绑定事件
function returnBtn() {
	var returnBtnEvent=document.getElementById("returnBtn");
	if(returnBtnEvent.hasAttributes("xlink:href")){
		returnBtnEvent.removeAttribute("xlink:href");
	}
	returnBtnEvent.onclick = function() {
		$("#ace-settings-container").css("display", "none");
		$(".mainDiv").load("jsp/layeringShow/second/second.jsp?type=" + subStationid.split("_")[0]+"&subType="+subStationid.split("_")[1]);
	}
}

//tips加载测点详情数据
function loadMeterDetail(url){
	$("rect[id^='meter'],g[id^='meter']").mousemove(function(e) {
		var dataType=loadItemsData();
		
		var x = e.clientX;
		var y = e.clientY; 
		if (id != this.id) {
			id = this.id;
			var paramJson = {};
 			paramJson.rtuId = id.split("_")[1];
			paramJson.mpId = id.split("_")[2];
			paramJson.dataType = dataType;
			tipShow.setUrl(basePath + url);
			tipShow.setParamJson(paramJson);

			tipShow.creatTipsDiv();
		}

		tipShow.setTipsLeft(x);
		tipShow.setTipsTop(y);
		tipShow.setTipsWidth(550);
		tipShow.tipsShow();

	}).mouseout(function() {
		tipShow.tipsHide();
	});
}
function loadItemsData(){
	var dataType = 0;
	if ($("#ace-settings-navbar").prop("checked")) {
		dataType = 1;
	}

	if ($("#ace-settings-sidebar").prop("checked")) {
		dataType = dataType + 2;
	}

	if ($("#ace-settings-breadcrumbs").prop("checked")) {
		dataType = dataType + 4;
	}

	if ($("#ace-settings-rtl").prop("checked")) {
		dataType = dataType + 8;
	}

	$("#ace-settings-navbar").change(function() {
		id = "";
	})
	$("#ace-settings-sidebar").change(function() {
		id = "";
	})
	$("#ace-settings-breadcrumbs").change(function() {
		id = "";
	})
	$("#ace-settings-rtl").change(function() {
		id = "";
	})
	return dataType;
}