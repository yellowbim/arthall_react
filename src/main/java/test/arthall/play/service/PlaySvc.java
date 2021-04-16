package test.arthall.play.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.play.map.PlayMap;

@Service
public class PlaySvc {

    @Autowired
    private PlayMap playMap;



}
