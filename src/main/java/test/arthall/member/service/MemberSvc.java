package test.arthall.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.mail.SendMail;
import test.arthall.member.map.MemberMap;
import test.arthall.member.model.MemberDao;

import javax.servlet.http.HttpServletRequest;
import java.util.Random;

import static test.arthall.mail.SendSMS.SendSms;

@Service
public class MemberSvc {

    @Autowired
    private MemberMap memberMap;

    public String getMbDupChk(MemberDao param){
        String resultCode = "";

        // 중복 체크
        if (memberMap.getMbDupChk(param) == 0){
            // 중복 아닌 경우
            resultCode = "0000";
        } else {
            // 중복이 아닐 경우 조회
            resultCode = "1111";
        }
        return  resultCode;
    }

    public String sendSms(HttpServletRequest req, MemberDao param) throws Exception{
        String ran = Integer.toString(new Random().nextInt(900000)+100000);
        MemberDao paramDao = SendSms(param, ran);       // 문자 발송
        memberMap.setConfirmPhoneINS(param);
        return ran;
    }

    public int sendMail(HttpServletRequest req, MemberDao param) throws Exception{
        int ran = new Random().nextInt(900000) + 100000;
        SendMail.sendEmail("leejj9612@naver.com", param.getEmail(), "[충무아트홀] 인증번호", "인증번호 : "+ran);
        return ran;
    }

}
