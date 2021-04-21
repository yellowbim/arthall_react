package test.arthall.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.main.map.MainMap;
import test.arthall.main.model.MainDao;

import java.util.List;

@Service
public class MainSvc {

    @Autowired
    private MainMap mainMap;

    // 전체 개수
    public int getFileContextCnt(MainDao param){
        return mainMap.getFileContextCnt(param);
    }

    // 파일 리스트 가져오기
    public List<MainDao> getFileContextList(MainDao param){
        // 전체 갯수를 받아와야함
        return mainMap.getFileContextList(param);
    }

    // 파일 업로드하기
    public void setFileContext(MainDao param){
        mainMap.setFileContext(param);
    }




}
