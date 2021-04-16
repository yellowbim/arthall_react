package test.arthall.main.model;

import lombok.Data;

import java.util.Date;

@Data
public class MainDao {

    private int seq;
    private String mbrNo;
    private String mbrId;
    private String mbrPwd;
    private String mbrNm;
    private String Sex;
    private String birth;
    private String cellNo;
    private String email;
    private String zipCode;
    private String addr;
    private String addrDetail;
    private String[] maketings;
    private String maketing;
    private Date insDate;
    private Date updDate;


    private String code;


    private String state;   // 문자 발송 상태
    private String ran;     // 랜덤 문자 번호


}
