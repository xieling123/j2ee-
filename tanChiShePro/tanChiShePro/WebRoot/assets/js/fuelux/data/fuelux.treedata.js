

//var tree_data = {
//	'sys-manager' : {name: '系统管理', type: 'folder' ,'id':'1'}	,
//	'make-gongdan' : {name: '生成工单', type: 'folder','id':'2'}	,
//	'gongdan-manager' : {name: '工单管理', type: 'folder','id':'3'}	,
//	'real-estate' : {name: '数据查询', type: 'folder','id':'4'}	,
//	'pets' : {name: '图像分析', type: 'folder','id':'5'}	,
//	'tickets' : {name: '异常告警', type: 'item','id':'6',}	
//}
//tree_data['sys-manager']['additionalParameters'] = {
//	'id':'1111',
//	'children' : {
//		'appliances' : {name: '角色管理', type: 'item',"item-selected":true,id:'11'},
//		'arts-crafts' : {name: '菜单配置', type: 'item',id:'12','item-selected':true},
//		'clothing' : {name: '流程配置', type: 'item',id:'13','item-selected':true},
//		'computers' : {name: '用户管理', type: 'item',id:'14','item-selected':true},
//		'jewelry' : {name: '阀值管理', type: 'item',id:'15','item-selected':true}
//	}
//}
//tree_data['make-gongdan']['additionalParameters'] = {
//	'id':'2222',
//	'children' : {
//		'gongdan1' : {name: '工单1', type: 'item',id:'21'},
//		'gongdan2' : {name: '工单2', type: 'folder',id:'22'},
//		'gongdan3' : {name: '工单3', type: 'item',id:'23'}
//	}
//}
//tree_data['make-gongdan']['additionalParameters']['children']['gongdan2']['additionalParameters'] = {
//	'children' : {
//		'classics' : {name: 'Classics', type: 'item',id:'221'},
//		'convertibles' : {name: 'Convertibles', type: 'item',id:'222'},
//		'coupes' : {name: 'Coupes', type: 'item',id:'223'},
//		'hatchbacks' : {name: 'Hatchbacks', type: 'item',id:'224'}
//	}
//}
//
//tree_data['gongdan-manager']['additionalParameters'] = {
//	'id':'3333',
//	'children' : {
//		'wait-gongdan' : {name: '待办工单', type: 'item',id:'31'},
//		'finish-gongdan' : {name: '已办工单', type: 'item',id:'32'}
//	}
//}
//tree_data['real-estate']['additionalParameters'] = {
//	'id':'5555',
//	'children' : {
//		'apartments' : {name: 'Apartments', type: 'item',id:'41'},
//		'villas' : {name: 'Villas', type: 'item',id:'42'},
//		'plots' : {name: 'Plots', type: 'item',id:'43'}
//	}
//}
//tree_data['pets']['additionalParameters'] = {
//	'id':'6666',
//	'children' : {
//		'cats' : {name: 'Cats', type: 'item',id:'51'},
//		'dogs' : {name: 'Dogs', type: 'item',id:'52'},
//		'horses' : {name: 'Horses', type: 'item',id:'53'},
//		'reptiles' : {name: 'Reptiles', type: 'item',id:'54'}
//	}
//}

//var tree_data ={
//    '刑侦': {
//        'text': '刑侦',
//        'type': 'folder',
//        'additionalParameters': {
//            'id': '1',
//            'children': {
//                '痕迹检验': {
//                    'text': '痕迹检验',
//                    'type': 'item',
//                    'additionalParameters': {
//                        'id': '10'
//                    }
//                },
//                '声像技术': {
//                    'text': '声像技术',
//                    'type': 'item',
//                    'additionalParameters': {
//                        'id': '9',
//                        'item-selected': true
//                    }
//                }
//            }
//        }
//    },
//    '交警': {
//        'text': '交警',
//        'type': 'folder',
//        'additionalParameters': {
//            'id': '32',
//            'children': {
//                '交通事故': {
//                    'text': '交通事故',
//                    'type': 'item',
//                    'additionalParameters': {
//                        'id': '33'
//                    }
//                },
//                '交通道理管理': {
//                    'text': '交通道理管理',
//                    'type': 'item',
//                    'additionalParameters': {
//                        'id': '34'
//                    }
//                }
//            }
//        }
//    }
//}

//var tree_data = {
//
//  "flow_1":{
//            "name":"系统管理",
//	        
//            "type":"folder",
//		    
//	        "additionalParameters":{
//                                    'item-selected': true,
//		                     
//                                    "children":{
//		                                        "flow_1_11":{"name":"角色管理",
//	                                                         "type":"item",
//	                                                         'id': '9',
//	                                                         'additionalParameters': {
//                                                                                     'item-selected': true
//                                                                                      }
//                                                             },
//			                                    "flow_1_12":{"name":"菜单配置",
//                                                             "type":"item"},
//	                                            "flow_1_13":{"name":"流程配置",
//                                                             "type":"item"},
//       	                                        "flow_1_14":{"name":"用户管理",
//                                                             "type":"item"},
//		                                        "flow_1_15":{"name":"阀值管理",
//                                                             "type":"item"}
//			                                   }
//			                       }
//	   },				
// "make-gongdan":{
//                 "name":"生成工单",
//                 "type":"folder",
//                 "additionalParameters":{
//                                         "children":{
//                                                     "gongdan1":{
//                                                                 "name":"工单1",
//                                                                 "type":"folder",
//                                                                 "additionalParameters":{
//                                                                                         "children":{
//                                                                                                     "classics":{"name":"Classics","type":"item"},
//                                                                                                     "convertibles":{"name":"Convertibles","type":"item"},
//                                                                                                     "coupes":{"name":"Coupes","type":"item"},
//                                                                                                     "hatchbacks":{"name":"Hatchbacks","type":"item"}
//                                                                                                     }
//                                                                                        }
//                                                                },
//                                                    "gongdan2":{
//                                                                "name":"工单2","type":"item"},
//                                                                "gongdan3":{"name":"工单3","type":"item"}
//                                                                }
//                                                    }                                  
//               },
// "gongdan-manager":{
//                    "name":"工单管理",
//                    "type":"folder",
//                    "additionalParameters":{
//                                            "children":{
//                                                        "wait-gongdan":{"name":"待办工单","type":"item"},
//                                                        "finish-gongdan":{"name":"已办工单","type":"item"}
//                                                       }
//                                           }
//                   },
// "real-estate":{
//                "name":"数据查询",
//                "type":"folder",
//                "additionalParameters":{
//                                        "children":{                                      
//                                                    "apartments":{"name":"Apartments","type":"item"},
//                                                    "villas":{"name":"Villas","type":"item"},
//                                                    "plots":{"name":"Plots","type":"item"}
//                                                    }
//                                       }
//               },
// "pets":{
//         "name":"图像分析",
//         "type":"folder",
//         "additionalParameters":{
//                                 "children":{
//                                             "cats":{"name":"Cats","type":"item"},
//                                             "dogs":{"name":"Dogs","type":"item"},
//                                             "horses":{"name":"Horses","type":"item"},
//                                             "reptiles":{"name":"Reptiles","type":"item"}
//                                             }
//                                }
//        },
// "tickets":{"name":"异常告警","type":"item"},
// "make-gongdan2":{
//                 "name":"生成工单",
//                 "type":"folder",
//                 "additionalParameters":{
//                                         "children":{
//                                                     "gongdan1":{
//                                                                 "name":"工单1",
//                                                                 "type":"folder",
//                                                                 "additionalParameters":{
//                                                                                         "children":{
//                                                                                                     "classics":{"name":"Classics","type":"item"},
//                                                                                                     "convertibles":{"name":"Convertibles","type":"item"},
//                                                                                                     "coupes":{"name":"Coupes","type":"item"},
//                                                                                                     "hatchbacks":{"name":"Hatchbacks","type":"item"}
//                                                                                                     }
//                                                                                        }
//                                                                },
//                                                    "gongdan2":{
//                                                                "name":"工单2",
//                                                                "type":"item",
//                                                                 'additionalParameters': {
//                                                                                     'item-selected': true
//                                                                                      }
//                                                                },
//                                                                "gongdan3":{"name":"工单3","type":"item"}
//                                                                }
//                                                    }
//                                         
//               },
// "gongdan-manager2":{
//                    "name":"工单管理",
//                    "type":"folder",
//                    "additionalParameters":{
//                                            "children":{
//                                                        "wait-gongdan":{"name":"待办工单","type":"item"},
//                                                        "finish-gongdan":{"name":"已办工单","type":"item"}
//                                                       }
//                                           }
//                   },
// "real-estate2":{
//                "name":"数据查询",
//                "type":"folder",
//                "additionalParameters":{
//                                        "children":{                                      
//                                                    "apartments":{"name":"Apartments","type":"item"},
//                                                    "villas":{"name":"Villas","type":"item"},
//                                                    "plots":{"name":"Plots","type":"item"}
//                                                    }
//                                       }
//               },
// "pets2":{
//         "name":"图像分析",
//         "type":"folder",
//         "additionalParameters":{
//                                 "children":{
//                                             "cats":{"name":"Cats","type":"item"},
//                                             "dogs":{"name":"Dogs","type":"item"},
//                                             "horses":{"name":"Horses","type":"item"},
//                                             "reptiles":{"name":"Reptiles","type":"item"}
//                                             }
//                                }
//        },
// "tickets2":{"name":"异常告警","type":"item"}
//}
$(function(){
            $.post(basePath+"userRank/getUserRank.do",{userId:1},function(data){
            	if(data.result=='success'){
            		responseSource = data.resultJson;
            		var responseSource;
					var DataSourceTree = function(options) {
						this._data 	= options.data;
						this._delay = options.delay;
					}
					
					DataSourceTree.prototype.data = function(options, callback) {
						var self = this;
						var $data = null;
					
						if(!("name" in options) && !("type" in options)){
							$data = this._data;//the root tree
							callback({ data: $data });
							return;
						}
						else if("name" in options && options.type == "folder") {
							if("additionalParameters" in options && "children" in options.additionalParameters)
								$data = options.additionalParameters.children;
							else $data = {}//no data
						}
						
						if($data != null)//this setTimeout is only for mimicking some random delay
							setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);
					
						//we have used static data here
						//but you can retrieve your data dynamically from a server using ajax call
						//checkout examples/treeview.html and examples/treeview.js for more info
					};
					var treeDataSource = new DataSourceTree({data:responseSource});
					$('#tree1').ace_tree({
							dataSource: treeDataSource ,
							multiSelect:true,
							loadingHTML:'<div class="tree-loading"><i class="icon-refresh icon-spin blue"></i></div>',
							'open-icon' : 'icon-minus',
							'close-icon' : 'icon-plus',
							'selectable' : true,
							'selected-icon' : 'icon-ok',
							'unselected-icon' : 'icon-remove',
							cacheItems: true,
						    folderSelect: false 
						    });
					  xuanzhongzhong();
           			  //xuanzhongzhong();
					  setTimeout("xuanzhongzhong1()",1000);
            	}
            });
});

