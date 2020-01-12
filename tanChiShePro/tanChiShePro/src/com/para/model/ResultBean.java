package com.para.model;

import java.io.Serializable;

import com.para.enums.ErrorCode;
import com.para.enums.ErrorCodeEnum;


import lombok.Data;

/**
 * 最后的返回bean,强制要求所有的返回类型都为此类型。方便以后对该项目进行aop扩展
 * */
@Data
public class ResultBean<T> implements Serializable {

	private static final long serialVersionUID = 1L;

	private String msg;

	private int code;

	private T jsonData;

	public ResultBean() {
		super();
	}

	public ResultBean(T jsonData) {
		super();
		this.jsonData = jsonData;
	}

	public ResultBean(Throwable e) {
		super();
		this.msg = e.toString();
		this.code = ErrorCodeEnum.FAILED.getCode();
	}
	
	public ResultBean(ErrorCode returnCode,T jsonData){
		super();
		this.code = returnCode.getCode();
		this.msg = returnCode.getMessage();
		this.jsonData = jsonData;
	}
	
	public ResultBean(ErrorCode returnCode){
		super();
		this.code = returnCode.getCode();
		this.msg = returnCode.getMessage();
	}
}
