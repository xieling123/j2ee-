package com.para.serviceimpl;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLDecoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import com.para.service.IImportExcelDataToGridService;
import com.para.util.UploadFolder;
@Service
public class ImportExcelDataToGridServiceImpl implements IImportExcelDataToGridService{
	
	/**
	 * 上传svg文件
	 */
	
	public JSONObject uploadSvgFolder(String param,MultipartFile file,HttpServletRequest request) throws Exception{
		
		JSONObject rtnJson =new JSONObject();
		UploadFolder uploadFolder =new UploadFolder();
		if(uploadFolder.uploadFolderUtil(file, request)){
			rtnJson.put("result","success");
		}else{
			rtnJson.put("result","fail");
		}
		
		return rtnJson;
	}
}
