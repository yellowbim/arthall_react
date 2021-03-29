package test.arthall.board.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import test.arthall.board.model.Board;
import test.arthall.board.model.BoardDao;
import test.arthall.board.service.BoardService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    // JPA를 사용해서 전체 조회
    @GetMapping("/board")
    public String getAllBoards(Board param){
        return boardService.getAllBoard(param);
    }


    @RequestMapping(value = "/test")
    public String getAllContents(BoardDao param){
        return boardService.getAllBoard(param);
    }

}
