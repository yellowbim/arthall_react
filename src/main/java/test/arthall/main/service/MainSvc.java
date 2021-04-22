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


    // 파일 리스트 가져오기
    public List<MainDao> getFileContextList(MainDao param){
        // 파일 전체 개수
        param.setPage((param.getPage()-1)*param.getRowSize());

        // 파일 조회 리턴
        return mainMap.getFileContextList(param);
    }

    // 파일 업로드하기
    public void setFileContext(MainDao param){
        mainMap.setFileContext(param);
    }




}
