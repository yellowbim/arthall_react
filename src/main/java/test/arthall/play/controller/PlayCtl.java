package test.arthall.play.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.play.model.PlayDao;
import test.arthall.play.service.PlaySvc;

import java.util.List;

// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
@CrossOrigin(origins = {"http://localhost:3000","http://www.yahmedora.com","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/play")
public class PlayCtl {

    @Autowired
    private PlaySvc playSvc;

    /***
     * 공연 목록 조회
     */
    @RequestMapping("/playList")
    public List<PlayDao> getPlayList(PlayDao param) throws Exception {
        return playSvc.getPlayList(param);
    }




}
