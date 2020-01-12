function tipsUtil() {
	this.tipsWidth = 0, //tips长度
			this.tipsHeight = 0, //tips高度
			this.tipsTop = 0, //tips位置Y
			this.tipsLeft = 0, //tips位置X
			this.paramJson = {}, //参数
			this.url = "" //请求地址
	return this;
};

tipsUtil.prototype.setTipsWidth = function(width) {
	this.tipsWidth = width
};
tipsUtil.prototype.setTipsLeft = function(left) {
	this.tipsLeft = left
};
tipsUtil.prototype.setTipsTop = function(top) {
	this.tipsTop = top
};
tipsUtil.prototype.setUrl = function(url) {
	this.url = url
};
tipsUtil.prototype.setParamJson = function(paramJson) {
	this.paramJson = paramJson
};

tipsUtil.prototype.creatTipsDiv = function() {
	var $this = this;

	$(".svg-tips").remove();
	var strData = JSON.stringify($this.paramJson);

	$.ajax( {
		url : $this.url,
		type : "get",
		dataType : "json",
		data : {
			queryJsonStr : strData
		},
		success:function(data){
			var jsonOne = data.jsonData;
			var div = document.createElement("div");
			div.setAttribute("class", "svg-tips");
			
			for(var param in jsonOne){
				//var hr = document.createElement("hr");
				var subDiv = document.createElement("div");
				subDiv.setAttribute("class", "subDivStyle");
				//subDiv.appendChild(hr);
				var h5 = document.createElement("h5");
				h5.innerHTML = param;
				h5.setAttribute("class", "h5Style")
				subDiv.appendChild(h5);
				//var hrDiv = document.createElement("div");
				//subDiv.appendChild(hrDiv);
				var table = document.createElement("table");
				table.setAttribute("class", "table");
				subDiv.appendChild(table);
				var index = 1;
				for ( var key in jsonOne[param]) {
					if (index % 3 == 1) {
						var tr = document.createElement("tr");
						table.appendChild(tr);
					}

					var tdKey = document.createElement("td");
					var tdValue = "";
					if (key != "") {
						tdValue = key + "&nbsp" + ":" + "&nbsp";
					}

					tdKey.innerHTML = tdValue;

					var tdValue = document.createElement("td");
					tdValue.innerHTML = jsonOne[param][key];

					tr.appendChild(tdKey);
					tr.appendChild(tdValue);

					index++;
				}
				div.appendChild(subDiv);
			}
			
			//var subDivOne = div.firstChild
			//subDivOne.removeChild(subDivOne.childNodes[0])
			document.body.appendChild(div);

			$(".svg-tips").css("width", $this.tipsWidth + "px");
			$this.tipsHeight = parseInt($(".svg-tips").css("height"));
		},
		error : function(data) {
			alert("获取数据错误");
		}
	});
}

tipsUtil.prototype.tipsShow = function() {
	var $this = this;

	//获取浏览器可视区宽高
	var clientWidth = $(window).width();
	var clientHeight = $(window).height();

	//水平位置定位
	if (($this.tipsLeft + $this.tipsWidth) > clientWidth - 5) {
		$this.tipsLeft = $this.tipsLeft - $this.tipsWidth - 5;
	} else {
		$this.tipsLeft = $this.tipsLeft + 5;
	}

	//垂直位置定位
	if (($this.tipsTop + $this.tipsHeight) > clientHeight - 5) {
		$this.tipsTop = $this.tipsTop - $this.tipsHeight - 5
				+ $(window).scrollTop();
		if ($this.tipsTop < 0) {
			$this.tipsTop = -$this.tipsTop;
		}
	} else {
		$this.tipsTop = $this.tipsTop + 5 + $(window).scrollTop();
	}

	$(".svg-tips").css("left", $this.tipsLeft + "px");
	$(".svg-tips").css("top", $this.tipsTop + "px");
	$(".svg-tips").css("display", "block");
}

tipsUtil.prototype.tipsHide = function() {
	$(".svg-tips").css("display", "none");
}
