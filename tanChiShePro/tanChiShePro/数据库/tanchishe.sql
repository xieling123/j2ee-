/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : tanchishe

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2019-12-28 11:20:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `histoticalrecord`
-- ----------------------------
DROP TABLE IF EXISTS `histoticalrecord`;
CREATE TABLE `histoticalrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `grade` varchar(64) DEFAULT NULL,
  `customsPass` varchar(64) DEFAULT NULL,
  `time` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of histoticalrecord
-- ----------------------------
INSERT INTO `histoticalrecord` VALUES ('1', '1', '43', '2', '2019-12-27');
INSERT INTO `histoticalrecord` VALUES ('2', '1', '65', '1', '2019-12-27');
INSERT INTO `histoticalrecord` VALUES ('3', '1', '10', '3', '2019-12-28 09:30:54');
INSERT INTO `histoticalrecord` VALUES ('4', '1', '30', '4', '2019-12-28 09:33:51');

-- ----------------------------
-- Table structure for `userpara`
-- ----------------------------
DROP TABLE IF EXISTS `userpara`;
CREATE TABLE `userpara` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(64) DEFAULT NULL,
  `userPwd` varchar(64) DEFAULT NULL,
  `touXiangUrl` varchar(64) DEFAULT NULL,
  `userDesc` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userpara
-- ----------------------------
INSERT INTO `userpara` VALUES ('1', '123', '123456', '11.jpg', 'dsds');
