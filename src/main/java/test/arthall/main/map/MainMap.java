package test.arthall.main.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.main.model.MainDao;

import java.util.List;


@Mapper
public interface MainMap {

    // 공연 정보 조회
    List<MainDao> getPlayList(MainDao param);

    // 파일리스트 갯수 조회
    int getFileContextCnt(MainDao param);

    // 파일 리스트 조회
    List<MainDao> getFileContextList(MainDao param);

    // 파일 업로드
    String setFileContext(MainDao param);

}
