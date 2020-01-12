package com.para.serviceimpl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.para.enums.ErrorCodeEnum;
import com.para.mapper.UserOperMapper;
import com.para.model.HistoticalRecord;
import com.para.model.ResultBean;
import com.para.model.UserPara;
import com.para.service.IUserOperationService;
@Service
public class UserOperationServiceImpl implements IUserOperationService{
	
	@Autowired
	private UserOperMapper userOperMapper;
	
	@Autowired
	private DataSourceTransactionManager transactionManager;	
	public ResultBean<String> loginCheck(String param) throws Exception {
		// TODO Auto-generated method stub
		JSONObject loginMsg=JSONObject.parseObject(param);
		
		Map<String, Object> paramJson = new HashMap<String, Object>();
		paramJson.put("userName", loginMsg.get("loginName"));
		paramJson.put("userPwd",  loginMsg.get("loginPwd"));
		int count=this.userOperMapper.loginCheck(paramJson);
		if (count != 1) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED,"登录失败");
		}
		return new ResultBean<String>(ErrorCodeEnum.SUCCESS,"登陆成功");
	}
	
	public ResultBean<String> addUser(UserPara userPara) throws Exception {	
		if (this.userOperMapper.addUser(userPara) <= 0) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED,"添加失败");
		}else{
			return new ResultBean<String>(ErrorCodeEnum.SUCCESS,"添加成功");		
		}
	}	
	
	public ResultBean<String> updateUserMsg(UserPara userPara)throws Exception {
		if (this.userOperMapper.updateUser(userPara) <= 0) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED,"更新失败");
		}
		return new ResultBean<String>(ErrorCodeEnum.SUCCESS,"更新成功");
	}
	
	//查看记录
	public JSONObject listHistoricalRec(String param,Integer nowPage,Integer pageSize) throws Exception{
		JSONObject rtnJson			 = new JSONObject();
		Map<String, Object> paramMap = new HashMap<String, Object>();
		JSONObject paramJson		 = JSONObject.parseObject(param);
		
		String describe	 = paramJson.getString("describe");
		paramMap.put("userName",  describe);

		Page<?> page = PageHelper.startPage(nowPage,pageSize,true);
 	    // 如果pageSize为0 显示全部, PageHelper.startPage(nowPage,pageSize,true);这个语句不能够设置为显示全部, 需要加入此设置才能显示全部成功
 		if (pageSize == 0) page.pageSizeZero(true);		
		
		List<Map<String,Object>> consList = new ArrayList<Map<String,Object>>();
		consList = this.userOperMapper.listHistoricalRec(paramMap);			
		
		if (consList.size() == 0 ) {
			rtnJson.put("code", ErrorCodeEnum.FAILED.getCode());
			rtnJson.put("jsonData", "数据库为空");
			return rtnJson;
		}
		JSONArray array = new JSONArray();
		
		String picPre = "<div class='grid-oper-button' style='text-align:center'><img style='width:100px' src='picturefile/";
		String picCenter = "'></img></div>";
		int index = 1;
		for (Map<String,Object> consMap : consList) {
			if (consMap == null ) continue;
			JSONObject perJson = new JSONObject();
			perJson.put("id", 	    		consMap.get("id"));
			perJson.put("index",			index++);
			perJson.put("userName",			consMap.get("userName"));
			if(consMap.get("touXiangUrl") == null){
				perJson.put("touXiangUrl", "无");
			}else{
				perJson.put("touXiangUrl",  picPre+consMap.get("touXiangUrl")+picCenter);
			}
			perJson.put("grade",			consMap.get("grade"));
			perJson.put("userDesc",			consMap.get("userDesc"));
			perJson.put("customsPass",		consMap.get("customsPass"));
			perJson.put("time",				consMap.get("time"));
			
			array.add(perJson);
		}
		rtnJson.put("code",    ErrorCodeEnum.SUCCESS.getCode());
		rtnJson.put("total",   page.getPages());
		rtnJson.put("page",    nowPage);
		rtnJson.put("records", consList.size());
		rtnJson.put("rows",    array);		
		
		return rtnJson;
	}	

	public JSONObject listUser(String param) throws Exception{
		
		JSONObject rtnJson = new JSONObject();
		Map<String, Object> paramMap = new HashMap<String, Object>();
		JSONObject paramJson = JSONObject.parseObject(param);
		
		String userName = paramJson.getString("userName");
		paramMap.put("userName", userName);		
		List<Map<String,Object>> consList = this.userOperMapper.listUser(paramMap);
		if (consList.size() == 0 ) {
			rtnJson.put("code", ErrorCodeEnum.FAILED.getCode());
			rtnJson.put("jsonData", "数据库为空");
			return rtnJson;
		}
		
		JSONArray array = new JSONArray();
		int index = 1;
		
		String picPre = "<div class='grid-oper-button' style='text-align:center'><img style='width:100px' src='picturefile/";
		String picCenter = "'></img></div>";		
		for (Map<String,Object> consMap : consList) {
			if (consMap == null ) continue;			
			JSONObject perJson = new JSONObject();
			
			perJson.put("id", consMap.get("id"));
			perJson.put("index",index++);
			perJson.put("userName", consMap.get("userName"));
			perJson.put("userDesc", consMap.get("userDesc"));
			perJson.put("userPwd",  consMap.get("userPwd"));
			if(consMap.get("touXiangUrl") == null){
				perJson.put("touXiangUrl", "无");
			}else{
				perJson.put("touXiangUrl",  picPre+consMap.get("touXiangUrl")+picCenter);
			}
			array.add(perJson);
		}
		rtnJson.put("code", ErrorCodeEnum.SUCCESS.getCode());
		rtnJson.put("total", 1);
		rtnJson.put("page", 1);
		rtnJson.put("records", consList.size());
		rtnJson.put("rows", array);
		
		return rtnJson;
	}
	
	public JSONObject mostGradeUser(String param) throws Exception{
		
		JSONObject rtnJson = new JSONObject();
		Map<String, Object> paramMap = new HashMap<String, Object>();
		JSONObject paramJson = JSONObject.parseObject(param);
			
		List<Map<String,Object>> consList = this.userOperMapper.mostGradeUser(paramMap);
		if (consList.size() == 0 ) {
			rtnJson.put("code", ErrorCodeEnum.FAILED.getCode());
			rtnJson.put("jsonData", "数据库为空");
			return rtnJson;
		}
		
		JSONArray array = new JSONArray();
		int index = 1;
				
		for (Map<String,Object> consMap : consList) {
			if (consMap == null ) continue;			
			JSONObject perJson = new JSONObject();
			
			perJson.put("id", 			consMap.get("id"));
			perJson.put("index",		index++);
			perJson.put("mostUser", 	consMap.get("userName"));
			perJson.put("mostGrade", 	consMap.get("grade"));
			perJson.put("mostCustomsP", consMap.get("customsPass"));
			perJson.put("mostTime",  	consMap.get("time"));
			
			array.add(perJson);
		}
		rtnJson.put("code", ErrorCodeEnum.SUCCESS.getCode());
		rtnJson.put("total", 1);
		rtnJson.put("page", 1);
		rtnJson.put("records", consList.size());
		rtnJson.put("rows", array);
		
		return rtnJson;
	}
	

	public ResultBean<String> addHistoricalRec(HistoticalRecord historicalRec) throws Exception {	
    	Date now = new Date();
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//可以方便地修改日期格式
    	String time = dateFormat.format( now ); 		
		historicalRec.setTime(time);
		if (this.userOperMapper.addHistoricalRec(historicalRec) <= 0) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED,"添加失败");
		}else{
			return new ResultBean<String>(ErrorCodeEnum.SUCCESS,"添加成功");		
		}
	}	
	
	public ResultBean<String> deleteHistoricalRec(List<Integer> ids)
	{
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
		TransactionStatus status = transactionManager.getTransaction(def);
		try {
			boolean flag = true;
			for (Integer id : ids) {
				flag = this.userOperMapper.deleteHistoricalRec(id) > 0 && flag;  
				if (!flag) {
					transactionManager.rollback(status);
					return new ResultBean<String>(ErrorCodeEnum.FAILED,"删除失败");
				}
			}
			transactionManager.commit(status);
			return new ResultBean<String>(ErrorCodeEnum.SUCCESS,"删除成功");
		} catch (Exception e) {
			transactionManager.rollback(status);
			e.printStackTrace();
			return new ResultBean<String>(ErrorCodeEnum.FAILED,"删除异常");
		}
	}	
}
