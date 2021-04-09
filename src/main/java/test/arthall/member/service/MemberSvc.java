package test.arthall.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.member.map.MemberMap;
import test.arthall.member.model.MemberDao;

@Service
public class MemberSvc {

    @Autowired
    private MemberMap loginMap;

    public String getMbDupChk(MemberDao param){
        String resultCode = "";

        // 중복 체크
        if (loginMap.getMbDupChk(param) == 0){
            // 중복 아닌 경우
            resultCode = "0000";
        } else {
            // 중복이 아닐 경우 조회
            resultCode = "1111";
        }
        return  resultCode;
    }

}
