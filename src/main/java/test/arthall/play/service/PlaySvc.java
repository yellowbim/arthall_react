package test.arthall.play.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.play.map.PlayMap;
import test.arthall.play.model.PlayDao;

import java.util.List;

@Service
public class PlaySvc {

    @Autowired
    private PlayMap playMap;

    // 공연 목록 조회
    public List<PlayDao> getPlayList(PlayDao param){
        return playMap.getPlayList(param);
    }

}
