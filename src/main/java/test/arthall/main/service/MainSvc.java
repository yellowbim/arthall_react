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
    public List<MainDao> getFileContext(MainDao param){
        return mainMap.getFileContext(param);
    }

    // 파일 업로드하기
    public void setFileContext(MainDao param){
        mainMap.setFileContext(param);
    }




}
