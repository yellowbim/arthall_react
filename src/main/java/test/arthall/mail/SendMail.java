package test.arthall.mail;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class SendMail {
	
	//파일 첨부 없는 메일 보내기
	public static int sendEmail(String from, String to, String subject, String contents) throws Exception{
		int result = 0;
		try {
        Properties props = System.getProperties();
         
        props.put("mail.smtp.host", "smtp.naver.com");
        props.put("mail.smtp.port", "465");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.ssl.trust", "smtp.naver.com");
          
        Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
            String un="leejj9612";
            String pw="wjdwns2622!";
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(un, pw);
            }
        });
        session.setDebug(true); //for debug
          
        Message mimeMessage = new MimeMessage(session);
        mimeMessage.setFrom(new InternetAddress(from));
        mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
        mimeMessage.setSubject(subject);
        mimeMessage.setText(contents);
        Transport.send(mimeMessage);
        result = 1;
		}catch(SendFailedException e) {			// 메일 주소 중 형식 올바르지 않는 주소가 있을 때
			result = 2;
		} catch (Exception e){
			System.out.println(e.toString());
		}
		return result;
	}

}
