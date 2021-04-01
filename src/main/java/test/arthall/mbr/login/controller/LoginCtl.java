package test.arthall.mbr.login.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.mbr.login.service.LoginSvc;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginCtl {

    @Autowired
    private LoginSvc boardService;

//    // JPA를 사용해서 전체 조회
//    @GetMapping("/board")
//    public String getAllBoards(Board param){
//        return boardService.getAllBoard(param);
//    }
//
//
//    @RequestMapping(value = "/test")
//    public String getAllContents(LoginDao param){
//        return boardService.getAllBoard(param);
//    }

}
