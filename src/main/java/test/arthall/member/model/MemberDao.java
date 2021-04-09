package test.arthall.member.model;

import lombok.Data;

import java.util.Date;

@Data
public class MemberDao {

    private int seq;
    private String mbrNo;
    private String mbrId;
    private String mbrPwd;
    private String mbrNm;
    private String mbrSex;
    private String cellNo;
    private int mbrAge;
    private String email;
    private String addr;
    private String detailAddr;
    private Date insDate;
    private Date updDate;

    private String code;
}
