package test.arthall.main.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.main.model.MainDao;

import java.util.List;


@Mapper
public interface MainMap {

    // 공연 정보 조회
    List<MainDao> getPlayList(MainDao param);

}
