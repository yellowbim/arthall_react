package test.arthall.board.service;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.board.map.BoardMap;
import test.arthall.board.map.BoardRepository;
import test.arthall.board.model.Board;
import test.arthall.board.model.BoardDao;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMap boardMap;

    @Autowired
    private BoardRepository boardRepository;

    public String getAllBoard(Board param){
        List<Board> vo = boardRepository.findAll();
        String json = new Gson().toJson(vo);
        return json;
    }

    public String getAllBoard(BoardDao param){
        List<BoardDao> vo = boardMap.getTest(param);
        String json = new Gson().toJson(vo);
        return json;
    }

}
