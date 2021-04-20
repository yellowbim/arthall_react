package test.arthall.play.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.play.model.PlayDao;

import java.util.List;


@Mapper
public interface PlayMap {

    // 공연 목록 조회
    List<PlayDao> getPlayList(PlayDao param);

}
