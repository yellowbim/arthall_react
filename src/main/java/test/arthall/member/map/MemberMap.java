package test.arthall.member.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.member.model.MemberDao;


@Mapper
public interface MemberMap {

    // 회원가입 : 회원 중복 체크
    int getMbDupChk(MemberDao param);

    MemberDao getMbrChk(MemberDao param);
    
    // 회원가입 : 문자 발송 정보 추가
    void setConfirmPhoneINS(MemberDao param);

    // 회원가입 : 회원 정보 저장
    void setMemberJoinINS(MemberDao param);

    // 로그인 : 회원 존재 유무
    int getMbrCnt(MemberDao param);
    // 로그인 : 회원 정보 조회
    MemberDao getMbrInfo(MemberDao param);
}
