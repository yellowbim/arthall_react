package test.arthall.mail;


import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.json.simple.JSONObject;
import test.arthall.member.model.MemberDao;

import java.util.HashMap;

public class SendSMS {

    public static void  SendSms(MemberDao param, int ran){
        String api_key = "NCSGW1SKUVJP3M8K";                    // 발급받은 api 키
        String api_secret = "JTN0NR9MIAZAWQF4IAG71II84SHEO3WK"; // 발급받은 api secret 키
        Message coolsms = new Message(api_key,api_secret);
        String msg = "[휴대폰 인증 확인] \n 휴대폰 인증 확인 번호는 [" + ran + "] 입니다.";

        HashMap<String, String> params = new HashMap<>();
        params.put("to", param.getCellNo());
        params.put("from", "010-2434-2788"); //사전에 사이트에서 번호를 인증하고 등록하여야 함
        params.put("type", "SMS");
        params.put("text", msg); //메시지 내용
        params.put("app_version", "test app 2.2");

        try {
            //send() 는 메시지를 보내는 함수
            JSONObject obj = (JSONObject) coolsms.send(params);
            System.out.println(obj.toString());
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }
    }

}
