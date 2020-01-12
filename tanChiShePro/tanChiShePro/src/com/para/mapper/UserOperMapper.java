package com.para.mapper;

import java.util.List;
import java.util.Map;

import com.para.model.HistoticalRecord;
import com.para.model.UserPara;

public interface UserOperMapper {
	
	List<Map<String,Object>> listUser(Map<String, Object> param);	
	
	int loginCheck(Map<String, Object> param);
	
	int addUser(UserPara userPara);	
	
	int updateUser(UserPara userPara);
	
	List<Map<String,Object>> listHistoricalRec(Map<String, Object> param);
	
	List<Map<String,Object>> mostGradeUser(Map<String, Object> param);
	
	int addHistoricalRec(HistoticalRecord historicalRec);
	
	int deleteHistoricalRec(Integer id);
	
}
