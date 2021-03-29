package test.arthall.board.map;

import org.springframework.data.jpa.repository.JpaRepository;
import test.arthall.board.model.Board;

// 간단한 crud는 상속으로 해결이 가능
public interface BoardRepository extends JpaRepository<Board, Integer> {

    
}
