package test.arthall.board.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.board.model.BoardDao;

import java.util.List;

@Mapper
public interface BoardMap {

    List<BoardDao> getTest(BoardDao param);

}
