package com.para.enums;

public enum ErrorCodeEnum implements ErrorCode{
	
	/* 请求失败 */
	FAILED(0,"失败"),
	
	/* 成功 */
	SUCCESS(1,"成功"),
	
	/* 执行异常 */
	EXCEPTION(2,"执行异常"),
	
	/* 数据库数据为空*/
	DATABASEEMPTY(3,"数据库数据为空"),
	
	/* 服务器出错 */
	INTERNAL_SERVER_ERROR(500, "服务器出错"),
	
	/** 400请求参数出错 */
	BAD_REQUEST(400, "请求参数出错"),
	;
	
	/* 状态码 */
	private Integer code;
	/* 状态信息 */
	private String message;
	
	private ErrorCodeEnum(Integer code,String message){
		this.code = code;
		this.message = message;
	}
	
	public Integer getCode() {
		// TODO Auto-generated method stub
		return code;
	}

	public String getMessage() {
		// TODO Auto-generated method stub
		return message;
	}
	
}
