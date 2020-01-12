$(document).ready(function(){
	
});



function fileChange(value){
	var pos = value.lastIndexOf("\\");
	$("#fileName").val(value.substring(pos+1));
}