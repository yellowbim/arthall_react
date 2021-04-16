package test.arthall.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.main.model.MainDao;
import test.arthall.main.service.MainSvc;


// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
@CrossOrigin(origins = {"http://localhost:3000","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/mbr")
public class MainCtl {

    @Autowired
    private MainSvc mainSvc;

    /***
     * 메인 정보 가져오기
     */
    public String arthallMain(MainDao param) throws Exception {

        return "";
    }







}