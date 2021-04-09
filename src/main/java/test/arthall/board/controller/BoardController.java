package test.arthall.board.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.board.model.BoardDao;
import test.arthall.board.service.BoardService;

@CrossOrigin(origins = {"http://localhost:3000","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;



    @RequestMapping(path = "/test")
    public String getAllContents(BoardDao param){
        System.out.println("NO 값"+param.getNo());
        System.out.println("TITLE  값"+param.getTitle());
        System.out.println("WRITER 값"+param.getWriter());

        return boardService.getAllBoard(param);
    }


}
