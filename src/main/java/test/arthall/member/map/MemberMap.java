package test.arthall.member.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.member.model.MemberDao;


@Mapper
public interface MemberMap {

    // 회원가입 : 회원 중복 체크
    int getMbDupChk(MemberDao param);

    MemberDao getMbrChk(MemberDao param);

}
