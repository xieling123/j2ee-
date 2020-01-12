var myv = {
	'id'				: '',
	'value'				: 'value',
	'describe'			: '',
	'min'				: undefined,
	'max'				: undefined,
	
	'required':function(flag){
		if ($.trim(this.value) == "") {
			alert(this.describe + " 不能为空！");
			$("#" + this.id).focus();
			return false;
		}else{
			return true;
		}
	},
	'number':function(){
		var reg = new RegExp("^-?\\d+$");
		
		if(!reg.test(this.value)){
			alert(this.describe + " 应为数字！");
			$("#" + this.id).focus().select();
			return false;
		}
		if(this.min!=undefined&& this.max != undefined) {			
			var tmp = parseInt(this.value);
			if (this.value > this.max || this.value < this.min) {
				alert(this.describe + " 应在" + this.min + "与" + this.max + "之间");
				$("#" + this.id).focus().select();
				return false;
			}
		}
		return true;
	},
	'dbl':function(){
		if(isNaN(this.value)){
			alert(this.describe + " 应为数字！");
			$("#" + this.id).focus().select();
			return false;
		}
		if(this.min!=undefined&& this.max != undefined) {
			var tmp = parseInt(this.value);
			if (this.value > this.max || this.value < this.min) {
				alert(this.describe + " 应在" + this.min + "与" + this.max + "之间");
				$("#" + this.id).focus().select();
				return false;
			}
		}
		return true;
	},
	'ip':function(){
		if (this.value == '0.0.0.0') return true;		
		var reg = new RegExp("^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$");
		return reg.test(this.value);
	},
	'email':function(){
		var reg = new RegExp("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$");
		return reg.test(this.value);
	},
	'phoneNumber':function(){//11位手机号、区号-固话号-分机号、固定电话号等格式
		var reg = new RegExp("^([1]{1}[0-9]{10}|([0-9]{7,8})|([0-9]{4}|[0-9]{3})-([0-9]{7,8})|([0-9]{4}|[0-9]{3})-([0-9]{7,8})-([0-9]{4}|[0-9]{3}|[0-9]{2}|[0-9]{1})|([0-9]{7,8})-([0-9]{4}|[0-9]{3}|[0-9]{2}|[0-9]{1}))$");
		return reg.test(this.value);
	},
	'telephone':function(){//区号-固话号-分机号、固定电话号等格式
		var reg = new RegExp("^(([0-9]{7,8})|([0-9]{4}|[0-9]{3})-([0-9]{7,8})|([0-9]{4}|[0-9]{3})-([0-9]{7,8})-([0-9]{4}|[0-9]{3}|[0-9]{2}|[0-9]{1})|([0-9]{7,8})-([0-9]{4}|[0-9]{3}|[0-9]{2}|[0-9]{1}))$");
		return reg.test(this.value);
	},
	'mobilephone':function(){//11位手机号
		var reg = new RegExp("^([1]{1}[0-9]{10})$");
		return reg.test(this.value);
	}
	,'hex':function(){//十六进制
		var reg = new RegExp("^[0-9A-Fa-f]+$");
		return reg.test(this.value);
	},'zipcode': function(){//邮编
		var reg = new RegExp("^[0-9]{6}$");
		return reg.test(this.value);
	},'bankaccountNo':function(){//19位数字的银行卡号
		var reg = new RegExp("^([0-9]{19})$");
		return reg.test(this.value);
	}
};
function isNumber(id, describe, min, max, required) {
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;
	
	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(min != undefined && max != undefined) {
			myv.min=min;
			myv.max=max;
		}else{
			myv.min = undefined;
			myv.max = undefined;
		}
		if(!myv.number()){
			return false;
		}
	}
	return true;
}
function isDbl(id,describe,min,max,required) {
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(min != undefined && max != undefined) {
			myv.min=min;
			myv.max=max;
		}
		if(!myv.dbl()){
			return false;
		}
	}
	return true;
}
function isIp(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.ip()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}
function isEmail(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.email()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}
function isPhoneNumber(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.phoneNumber()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}
function isTelephone(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.telephone()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}
function isMobilePhone(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.mobilephone()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}

//根据号码判断
function isMobilePhoneByCont(val,describe,required){
	//myv.id = id;
	myv.value = val;
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.mobilephone()){
			alert(describe + "错误！");
			//$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}

function isHex(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.hex()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}
function isZipcode(id,describe,required){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;

	if (required != undefined && required==true) {
		if(!myv.required(required)){
			return false;
		}
	}
	if($.trim(myv.value)!=""){
		if(!myv.zipcode()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}

function isBankAccountNo(id,describe){
	myv.id = id;
	myv.value = $("#" + id).val();
	myv.describe = describe;
	
	if($.trim(myv.value)!=""){
		if(!myv.bankaccountNo()){
			alert(describe + " 错误！");
			$("#" + id).focus().select();
			return false;
		}
	}
	return true;
}


function ckChar(id,describe,maxlength,required){
	if (required != undefined && required==true) {
		if ($.trim($("#" + id).val()) == "") {
			alert(describe + " 不能为空！");
			$("#" + id).focus();
			return false;
		}
	}
	if ($("#" + id).val().length > maxlength) {
		alert(describe + "不能超过"+maxlength+"位！");
		$("#" + id).focus().select();
		return false;
	}
	return true;
}
//验证输入框为字符或者是数字
function ckNumChar(value,len) {
	//var Regx =/^[A-Za-z0-9]*$/;
    var Regx =new RegExp("^[A-Za-z0-9]*$");
  	if(Regx.test(value)&&value.length<=len) {
        return true;
    }
    else {
        return false;
    }
} 