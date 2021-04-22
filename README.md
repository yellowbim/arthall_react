# arthall
충무아트홀 웹프로젝트 포트폴리오

## 초기 설정 

## DATABASE 설정

HeidiSQL
> user: root, password: root1234   
> port: 3306, batabase: arthall   
> 테이블명   
  -admin, member, notice, news, qna, faq, play, reserv   
> 테이블 생성 코드   

-admin (07-28 13:26 마지막 수정)

```
CREATE TABLE `admin` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`id` VARCHAR(50) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`name` VARCHAR(50) NOT NULL,
	`tel` VARCHAR(50) NULL DEFAULT NULL,
	`email` VARCHAR(50) NULL DEFAULT NULL,
	`birth` VARCHAR(50) NULL DEFAULT NULL,
	`regdate` TIMESTAMP NOT NULL,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=5
;


```
-admin.board (07-28 13:26 마지막 수정)

```
CREATE TABLE `board` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`content` TEXT NULL DEFAULT NULL,
	`regdate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`moddate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`readcnt` INT(11) NOT NULL DEFAULT 0,
	`writer` VARCHAR(50) NOT NULL DEFAULT '0',
	`filename` VARCHAR(255) NULL DEFAULT NULL,
	`group_no` INT(11) NOT NULL,
	`order_no` INT(11) NULL DEFAULT 0,
	`depth_no` INT(11) NULL DEFAULT 0,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=98
;


```

-play (#3. play/perform/exhibit으로 분할 예정, 이후로는 최종 완성 이후 수정하겠습니다. - 현재 로컬 작업중)

```
CREATE TABLE `play` (
	`no` INT(11) NOT NULL AUTO_INCREMENT COMMENT '공연번호',
	`hallNo` INT(11) NULL DEFAULT NULL COMMENT '홀번호',
	`playType` INT(1) NULL DEFAULT 1 COMMENT '공연1 전시회2',
	`playName` VARCHAR(50) NULL DEFAULT NULL COMMENT '제목',
	`startDate` DATE NULL DEFAULT NULL COMMENT '기간(시작일)',
	`endDate` DATE NULL DEFAULT NULL COMMENT '기간(종료일)',
	`starring` TEXT NULL DEFAULT NULL COMMENT '출연진/작가',
	`content` TEXT NULL DEFAULT NULL COMMENT '내용(본문)',
	`rating` VARCHAR(50) NULL DEFAULT NULL COMMENT '등급',
	`runningTime` INT(11) NULL DEFAULT NULL COMMENT '러닝타임',
	`inquiry` VARCHAR(50) NULL DEFAULT NULL COMMENT '문의',
	`producer` VARCHAR(50) NULL DEFAULT NULL COMMENT '제작/주최',
	`filename` VARCHAR(50) NULL DEFAULT NULL COMMENT '첨부파일',
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=7
;


```
-reserv 이정준 2020-08-13
```
CREATE TABLE `reserv` (
	`no` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'index',
	`reservNo` VARCHAR(50) NOT NULL DEFAULT '0' COMMENT '예약번호',
	`memberNo` INT(11) NULL DEFAULT NULL COMMENT '예약자회원번호',
	`name` VARCHAR(50) NULL DEFAULT NULL COMMENT '예약자명',
	`reservDate` DATE NULL DEFAULT NULL COMMENT '예약일자',
	`playNo` INT(11) NULL DEFAULT NULL COMMENT '전시회공연번호',
	`playName` VARCHAR(50) NULL DEFAULT NULL COMMENT '전시회공연이름',
	`playDate` DATE NULL DEFAULT NULL COMMENT '전시회공연일자',
	`time` VARCHAR(50) NULL DEFAULT NULL COMMENT '공연시작시간',
	`hallNo` INT(11) NOT NULL DEFAULT 0 COMMENT '홀번호',
	`hallName` VARCHAR(50) NOT NULL DEFAULT '0' COMMENT '홀이름',
	`pay` VARCHAR(50) NOT NULL DEFAULT '미입금' COMMENT '결제현황',
	`price` VARCHAR(50) NULL DEFAULT NULL COMMENT '전체 가격',
	`seat` VARCHAR(50) NULL DEFAULT NULL COMMENT '좌석 정보',
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=142
;



```
-ticket 이정준 2020-08-13
```
CREATE TABLE `ticket` (
	`no` INT(11) NOT NULL AUTO_INCREMENT COMMENT '티켓 번호',
	`reservNo` VARCHAR(50) NOT NULL DEFAULT '\'\'' COMMENT '예약 번호',
	`seatType` VARCHAR(50) NULL DEFAULT NULL COMMENT 'null이면 전시회',
	`price` VARCHAR(50) NOT NULL DEFAULT '' COMMENT 'int',
	`pay` VARCHAR(50) NULL DEFAULT '미입금' COMMENT '결제현황',
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=130
;


```
board/notice 황동민 20200730 filename_org 추가
```


CREATE TABLE `notice` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NULL DEFAULT NULL,
	`filename_org` VARCHAR(50) NULL DEFAULT NULL,
	`regDate` TIMESTAMP NULL DEFAULT NULL,
	`readCnt` INT(11) NULL DEFAULT NULL,
	`writer` VARCHAR(50) NULL DEFAULT NULL,
	`filename` VARCHAR(50) NULL DEFAULT NULL,
	`modDate` TIMESTAMP NULL DEFAULT NULL,
	`content` TEXT NULL DEFAULT NULL,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=81
;


```

board/faq  // 오게이 예아 20200724 임한철
```
CREATE TABLE `faq` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`content` TEXT NULL DEFAULT NULL,
	`regdate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`moddate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`readcnt` INT(11) NOT NULL DEFAULT 0,
	`writer` VARCHAR(50) NOT NULL DEFAULT '0',
	`filename` VARCHAR(255) NULL DEFAULT NULL,
	`filename_org` VARCHAR(255) NULL DEFAULT NULL,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1;

```
board/news 황동민 20200730 filename_org 추가 
```
CREATE TABLE `news` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NULL DEFAULT NULL,
	`content` TEXT NULL DEFAULT NULL,
	`filename_org` VARCHAR(50) NULL DEFAULT NULL,
	`regDate` TIMESTAMP NULL DEFAULT NULL,
	`readCnt` INT(11) NULL DEFAULT NULL,
	`writer` VARCHAR(50) NULL DEFAULT NULL,
	`filename` VARCHAR(50) NULL DEFAULT NULL,
	`modDate` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=22
;

```

board/qna   //오게이 예아 이만철 20200727
```
CREATE TABLE `qna` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`content` TEXT NULL DEFAULT NULL,
	`readcnt` INT(11) NOT NULL DEFAULT 0,
	`regdate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`moddate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	`writer` VARCHAR(50) NOT NULL,
	`filename` VARCHAR(255) NULL DEFAULT NULL,
	`filename_org` VARCHAR(255) NULL DEFAULT NULL,
	`gno` INT(11) NOT NULL DEFAULT 0,
	`ono` INT(11) NOT NULL DEFAULT 0,
	`nested` INT(11) NOT NULL DEFAULT 0,
	PRIMARY KEY (`no`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
```

-member 200731_수정 김대영/신근영
```
CREATE TABLE `member` (
	`no` INT(11) NOT NULL AUTO_INCREMENT,
	`id` VARCHAR(50) NULL DEFAULT NULL,
	`pw` VARCHAR(50) NULL DEFAULT NULL,
	`name` VARCHAR(50) NULL DEFAULT NULL,
	`gender` INT(11) NULL DEFAULT 4 COMMENT '1=남성 / 2=여성 / 3=제3의성  / 4=기재원치않음',
	`tel` VARCHAR(50) NULL DEFAULT NULL,
	`email` VARCHAR(50) NULL DEFAULT NULL,
	`sample4_postcode` VARCHAR(50) NULL DEFAULT NULL,
	`sample4_roadAddress` VARCHAR(100) NULL DEFAULT NULL,
	`sample4_jibunAddress` VARCHAR(100) NULL DEFAULT NULL,
	`sample4_detailAddress` VARCHAR(100) NULL DEFAULT NULL,
	`birth` VARCHAR(50) NULL DEFAULT NULL,
	`joinDate` TIMESTAMP NULL DEFAULT NULL,
	`lastVisit` TIMESTAMP NULL DEFAULT NULL,
	`banMem` VARCHAR(50) NULL DEFAULT NULL,
	`ad_email` VARCHAR(100) NULL DEFAULT '0' COMMENT '메일 광고 동의 check 0=비선택 / 1=선택',
	`ad_tel` VARCHAR(100) NULL DEFAULT '0' COMMENT 'sms 광고 동의 check 0=비선택 / 1=선택',
	PRIMARY KEY (`no`)
)
COMMENT='회원테이블'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=26
;
``` 

-member 200830_수정 황동민 notice 새로올림 
```
-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.4-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- arthall 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `arthall` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `arthall`;

-- 테이블 arthall.notice 구조 내보내기
CREATE TABLE IF NOT EXISTS `notice` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `regDate` timestamp NULL DEFAULT NULL,
  `readCnt` int(11) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `filename` varchar(50) DEFAULT NULL,
  `modDate` timestamp NULL DEFAULT NULL,
  `content` text DEFAULT NULL,
  `filename_org` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`no`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- 테이블 데이터 arthall.notice:~12 rows (대략적) 내보내기
DELETE FROM `notice`;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` (`no`, `title`, `regDate`, `readCnt`, `writer`, `filename`, `modDate`, `content`, `filename_org`) VALUES
	(38, '게시물 등록_1', '2020-08-16 23:07:37', 5, 'hdmin', '1597586857406.png', '2020-08-16 23:07:37', '<p>게시물 등록_1</p>', '게시판 목록.png'),
	(39, '게시물 등록_2', '2020-08-16 23:28:03', 0, 'hdmin', NULL, '2020-08-16 23:28:03', '<p>게시물 등록_2&nbsp;</p>', ''),
	(40, '게시물 등록_3', '2020-08-16 23:28:13', 0, 'hdmin', NULL, '2020-08-16 23:28:13', '<p>게시물 등록_4&nbsp;</p>', ''),
	(41, '게시물 등록_5', '2020-08-16 23:28:22', 0, 'hdmin', NULL, '2020-08-16 23:28:22', '<p>게시물 등록_5&nbsp;</p>', ''),
	(42, '게시물 등록_6', '2020-08-16 23:28:30', 0, 'hdmin', NULL, '2020-08-16 23:28:30', '<p>게시물 등록_6&nbsp;</p>', ''),
	(43, '게시물 등록_7', '2020-08-16 23:28:37', 0, 'hdmin', NULL, '2020-08-16 23:28:37', '<p>게시물 등록_7&nbsp;</p>', ''),
	(44, '게시물 등록_8', '2020-08-16 23:28:45', 1, 'hdmin', NULL, '2020-08-16 23:28:45', '<p>게시물 등록_8&nbsp;</p>', ''),
	(45, '게시물 등록_9', '2020-08-16 23:28:52', 0, 'hdmin', NULL, '2020-08-16 23:28:52', '<p>게시물 등록_9&nbsp;</p>', ''),
	(46, '게시물 등록_10', '2020-08-16 23:28:59', 0, 'hdmin', NULL, '2020-08-16 23:28:59', '<p>게시물 등록_10&nbsp;</p>', ''),
	(47, '게시물 등록_11', '2020-08-16 23:29:07', 2, 'hdmin', NULL, '2020-08-16 23:29:07', '<p>게시물 등록_11&nbsp;</p>', ''),
	(48, '게시물 등록_12', '2020-08-16 23:29:16', 6, 'hdmin', NULL, '2020-08-16 23:29:16', '<p>게시물 등록_12&nbsp;</p>', ''),
	(49, 'asfdfsa', '2020-08-30 14:18:21', 0, 'hdmin', NULL, '2020-08-30 14:18:21', '<p>1123123</p>', '');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;


``` 
-member 200830_수정 황동민 news 새로올림 
```
-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.4-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- arthall 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `arthall` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `arthall`;

-- 테이블 arthall.news 구조 내보내기
CREATE TABLE IF NOT EXISTS `news` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `regDate` timestamp NULL DEFAULT NULL,
  `readCnt` int(11) DEFAULT NULL,
  `writer` varchar(50) DEFAULT NULL,
  `filename` varchar(50) DEFAULT NULL,
  `modDate` timestamp NULL DEFAULT NULL,
  `filename_org` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- 테이블 데이터 arthall.news:~1 rows (대략적) 내보내기
DELETE FROM `news`;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`no`, `title`, `content`, `regDate`, `readCnt`, `writer`, `filename`, `modDate`, `filename_org`) VALUES
	(7, 'sfasdf', '<p>sfasdf</p>', '2020-08-16 23:06:08', 1, 'hdmin', '1597586768778.png', '2020-08-16 23:06:08', '게시판 목록.png');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;


``` 
예시)

-테이블명

생성 코드

## ECLIPSE 경로설정   

Eclipse IDE Enterprice for Java Developers   

>src/main/java   
>>/admin
>>>/board

>>/member  

>>/board       
>>>/notice      
>>>/news    
>>>/qna   
>>>/faq   

>>/play     
>>/reserv   

### Controller(경로이름 가이드) 

	-@RequestMapping("admin/패키지이름/페이지이름.do")    
	-ex) 공지사항 리스트 컨트롤러 메서드    
	 -@RequestMapping("admin/board/notice/list.do") 

 admin/User   
	
	  >사용자_패키지명+클래스명.java   
	 ex) 관리자/회원 예약 컨트롤러 클래스명 예시   
	  > Ad_ReservController.java
	  > User_ReservController.java


페이지이름.jsp(페이지 이름 가이드)   


	  /admin/상위패키지이름/하위패키지이름/페이지이름.jsp   
	  ex) 공지사항리스트 페이지   
	  /admin/board/notice/list.jsp   

>WEB-INF/view   
>>/admin   


>>>/admin 
>>>>/board 

>>>/member 

>>>/board   
>>>>/notice   
>>>>/news   
>>>>/qna   
>>>>/faq

>>>/play

>>>/reserv   


