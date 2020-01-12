package com.para.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.para.model.HistoticalRecord;
import com.para.model.ResultBean;
import com.para.model.UserPara;


public interface IUserOperationService {
	
	ResultBean<String> loginCheck(String param) throws Exception;;
	
	ResultBean<String> addUser(UserPara userPara) throws Exception;
	
	ResultBean<String> updateUserMsg(UserPara userPara) throws Exception;
	
	JSONObject listHistoricalRec(String param, Integer page, Integer rows) throws Exception;
	
	JSONObject listUser(String param) throws Exception;
		
	JSONObject mostGradeUser(String param) throws Exception;
	
	ResultBean<String> addHistoricalRec(HistoticalRecord historicalRec) throws Exception;
	
	ResultBean<String> deleteHistoricalRec(List<Integer> id);
	
}
