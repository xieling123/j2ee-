package com.para.util;

import java.io.File;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.commons.io.FileUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import cn.jiguang.common.utils.StringUtils;

import com.para.serviceimpl.ImportExcelDataToGridServiceImpl;

public class UploadFolder {
	public boolean uploadFolderUtil(MultipartFile file,HttpServletRequest request){
		
		try{
			MultipartResolver resolver = new CommonsMultipartResolver(request.getSession().getServletContext());
			
			if(resolver.isMultipart(request)){
				String real_basepath="";
				real_basepath = new File(new File(ImportExcelDataToGridServiceImpl.class.getResource("/").getPath()).getParent()).getParent();
				
				real_basepath = URLDecoder.decode(real_basepath, "UTF-8");
				
				DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
				
				//DocumentBuilder    builder = factory.newDocumentBuilder();
				String filePath = real_basepath + File.separator +"picturefile";
				filePath = URLDecoder.decode(filePath,"UTF-8");
				
				
				String upLoadFileName = file.getOriginalFilename();
				
				if(StringUtils.isNotEmpty(upLoadFileName)){
					
					//String suffix = upLoadFileName.substring(upLoadFileName.indexOf("."));
					
					String savePath = filePath +"/"+upLoadFileName;
					
					File saveFile = new File(savePath);
					
					File parentFile = saveFile.getParentFile();
					
					if(saveFile.exists()){
						saveFile.delete();
					}else{
						if(!parentFile.exists()){
							parentFile.mkdirs();
						}
					}
					
					FileUtils.copyInputStreamToFile(file.getInputStream(), saveFile);
					//FTPClientUtil.upload(saveFile,);
					
				}
			}	
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return true;
	}
}
