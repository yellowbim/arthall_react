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

    // 회원가입 :  회원 중복 체크
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

    // 회원가입 :  sms 발송
    public String sendSms(HttpServletRequest req, MemberDao param) throws Exception{
        String ran = Integer.toString(new Random().nextInt(900000)+100000);
        MemberDao paramDao = SendSms(param, ran);       // 문자 발송
        memberMap.setConfirmPhoneINS(param);
        return ran;
    }

    // 회원가입 : 메일 발송
    public int sendMail(HttpServletRequest req, MemberDao param) throws Exception{
        int ran = new Random().nextInt(900000) + 100000;
        SendMail.sendEmail("leejj9612@naver.com", param.getEmail(), "[충무아트홀] 인증번호", "인증번호 : "+ran);
        return ran;
    }


    // 회원가입 : 회원 정보 저장
    public String setMemberJoinINS(MemberDao param) throws Exception{
        String result = "";
        String maketing = "";

        // 마케팅 정보 셋팅
        for (int i = 0; i < param.getMaketings().length; i++){
            if (i != 0) {
                maketing = param.getMaketings()[i];
            } else {
                maketing = "," + param.getMaketings()[i];
            }
        }
        param.setMaketing(maketing);

        try{
            memberMap.setMemberJoinINS(param);
            result = "0000";
        } catch (Exception e ){
            System.out.println("[MbrINS_ERR]_ "+ e);
            result = "1111";
        }
        return result;
    }

    // 로그인 : 회원 정보 조회
    public MemberDao getMbrInfo(MemberDao param){
        MemberDao vo = new MemberDao();
        // 회원 존재 유무 확인
        if (memberMap.getMbrCnt(param) == 0){
            // 회원 정보 없음
            vo.setCode("1111");
        } else{
            vo = memberMap.getMbrInfo(param);
            vo.setCode("0000");
        }

        return vo;
    }




}
