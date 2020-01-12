package com.para.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;

public interface IImportExcelDataToGridService {
	
	JSONObject uploadSvgFolder(String param,MultipartFile file,HttpServletRequest request)throws Exception;
	
	
}
