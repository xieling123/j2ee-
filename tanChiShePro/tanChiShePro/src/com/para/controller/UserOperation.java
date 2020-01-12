package com.para.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.para.enums.ErrorCodeEnum;
import com.para.model.HistoticalRecord;
import com.para.model.ResultBean;
import com.para.model.UserPara;
import com.para.service.IUserOperationService;

@RestController
@RequestMapping("userOper")
public class UserOperation {
	@Autowired
	private IUserOperationService userOperationService;
	
	@GetMapping(value = "user", 
			produces = { "application/json;charset=UTF-8" })
	public ResultBean<String> userLoginCheck(String param,HttpServletResponse res) throws Exception {
		if (param == null ) {
			return new ResultBean<String>(ErrorCodeEnum.BAD_REQUEST);
		}
		return userOperationService.loginCheck(param);
	}
	
	@PostMapping(value="user",
			produces = {"application/json;charset=UTF-8"})
	public ResultBean<String> addUser(@Valid UserPara userPara,Errors errors) throws Exception{
		if(errors.hasErrors()){
			List<ObjectError> errorList = errors.getAllErrors();
			StringBuffer buffer = new StringBuffer(); 
			for (ObjectError objectError : errorList) {
				buffer.append(objectError.getDefaultMessage()+"  ");
			}
			return new ResultBean<String>(ErrorCodeEnum.BAD_REQUEST, "参数错误");
		}
		return this.userOperationService.addUser(userPara);
	}	
	
	@PutMapping(value="user",
			produces = {"application/json;charset=UTF-8"})
	public ResultBean<String> updateUserMsg(UserPara userpara) throws Exception{
		if (userpara == null || userpara.getId() == null) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED, "参数错误");
		}
		return this.userOperationService.updateUserMsg(userpara);
	}	
	//查看记录 start
	@GetMapping(value = "listHistoricalRec", 
			produces = { "application/json;charset=UTF-8" })
	public JSONObject listHistoricalRec(String param,Integer page ,Integer rows) throws Exception {
		return this.userOperationService.listHistoricalRec(param,page,rows);
	}

	@PostMapping(value="listHistoricalRec",
			produces = {"application/json;charset=UTF-8"})
	public ResultBean<String> addHistoricalRec(@Valid HistoticalRecord histoticalRecord,Errors errors) throws Exception{
		if(errors.hasErrors()){
			List<ObjectError> errorList = errors.getAllErrors();
			StringBuffer buffer = new StringBuffer(); 
			for (ObjectError objectError : errorList) {
				buffer.append(objectError.getDefaultMessage()+"  ");
			}
			return new ResultBean<String>(ErrorCodeEnum.BAD_REQUEST, "参数错误");
		}
		return this.userOperationService.addHistoricalRec(histoticalRecord);
	}	
	//end
	@GetMapping(value = "listUser", 
			produces = { "application/json;charset=UTF-8" })
	public JSONObject listUser(String param) throws Exception {
		return this.userOperationService.listUser(param);
	}
	
	@GetMapping(value = "mostGradeUser", 
			produces = { "application/json;charset=UTF-8" })
	public JSONObject mostGradeUser(String param) throws Exception {
		return this.userOperationService.mostGradeUser(param);
	}
	
	@DeleteMapping(value="historicalRec/{id}",
			produces = {"application/json;charset=UTF-8"})
	public ResultBean<String> deleteHistoricalRec(@PathVariable List<Integer> id) throws Exception{
		if (id == null ) {
			return new ResultBean<String>(ErrorCodeEnum.FAILED, "参数错误");
		}
		return this.userOperationService.deleteHistoricalRec(id);
	}
	
}
