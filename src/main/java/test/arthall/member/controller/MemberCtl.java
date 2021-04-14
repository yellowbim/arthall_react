package test.arthall.member.controller;


import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.member.model.MemberDao;
import test.arthall.member.service.MemberSvc;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

/***
 *  CORS란?
 *  Cross-Origin Resource Sharing   의 줄임말로써
 *  API 통신을 하면서 출처를 공유하는 작업 (보안)
 *  EX) https://google.com/search?q=솔라#foo
 *      - https://          Protocol        ㅡ┐      두개 + 포트번호 를 합쳐서 출처
 *      - google.com        Host            ㅡ┘      Internet Explore는 포트번호를 아예 무시해버림
 *      - /search           Path
 *      - q=솔라             Query String
 *      - #foo              Fragment
 *
 *      출처만 일치하면 CORS는  동일한것으로 판단!!!!
 *
 *      CORS는 개발 스펙에 구현되있는 부분이 아니라 브라우저에 구현되어있음
 *      ==> 브라우저에서 CORS를 위반하는 요청을 보내면 API 서버는 어? 요청이네? 가져가~ 하고 정상적으로 return 하지만
 *          브라우저 response에서 CORS를 위반하는 정보네?! 하고 받지 않음!!!!!
 *          즉 요청은 지 맘대로, 받는건 법대로
 *
 *      이미지, 실행 가능한 스크립트, 스타일 시트 등은 정책사항에 걸리지 않기 때문에 요청 가능
 *
 *      통신 단계
 *      1. 예비요청
 *          i) 브라우저에서 허용/금지 정보 전달
 *          ii) 서버에서 허용/금지 정보 전달
 *          iii) 브라우저에서 비교 후 일치하지 않으면 안전하지 않은 것으로 판단하고 본 요청을 보내지 않음
 *
 *      우회방법
 *       백엔드는 일반적으로 설정이 되어있는 경우가 많아서 크게 걸리는 문제는 없지만,   프로트 엔드에서 자주 발견됨
 *       ==> webpack-dev-server를 사용해서 CORS를 우회할 수 있음
 *
 *        module.exports = {
 *           devServer: {
 *             proxy: {
 *               '/api': {
 *                 target: 'https://api.evan.com',
 *                 changeOrigin: true,
 *                 pathRewrite: { '^/api': '' },
 *               },
 *             }
 *           }
 *         }
 *
 *       이렇게 설정해 놓으면 /api로 시작하는 URL로 보낸것으로 인식하지만 webpack이 자동으로 https://api.evan.com 주소로 프록싱해줌
 *
 *
 ***/
// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
@CrossOrigin(origins = {"http://localhost:3000","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/mbr")
public class MemberCtl {

    @Autowired
    private MemberSvc memberSvc;

    /***
     * 회원가입
     * 회원 id 중복 체크
     */
    @RequestMapping(path = "/valChk")
    public String getMbrChk(HttpServletRequest request, MemberDao param){
        System.out.println(param.getMbrId());
        String vo = memberSvc.getMbDupChk(param);

        return new Gson().toJson(vo);
    }

    /***
     * 회원가입
     * 회원 전화번호 인증
     */
    //회원가입_이메일 인증
    @RequestMapping("/sendSms")
    public String sendSms(HttpServletRequest req, MemberDao param, HttpServletResponse res) throws Exception {
        String ran = memberSvc.sendSms(req, param);
        return ran;
    }

    /***
     * 회원가입
     * 회원 이메일 인증
     */
    //회원가입_이메일 인증
    @RequestMapping("/sendMail")
    public void sendMail(HttpServletRequest req, MemberDao param, HttpServletResponse res) throws Exception {

        int ran = memberSvc.sendMail(req, param);
        res.setContentType("text/html; charset=utf-8");

        PrintWriter out = res.getWriter();
        out.print(ran);
        out.flush();
    }


    /***
     * 회원 가입
     */
    @RequestMapping("/join")
    public String mbrJoin(HttpServletRequest req, MemberDao param, HttpServletResponse res) throws Exception {
        String result = memberSvc.setMemberJoinINS(param);
        return result;
    }


    /***
     * 회원 로그인
     * 회원 정보 조회 및 세션 저장
     * jwt 값으로 토큰을 생성해서 저장하고싶은데 우찌 해야하나
     */
    @RequestMapping("/login")
    public String mbrLogin(HttpServletRequest req, MemberDao param, HttpServletResponse res) throws Exception {
        MemberDao vo = memberSvc.getMbrInfo(param);
        return new Gson().toJson(vo);
    }








}
