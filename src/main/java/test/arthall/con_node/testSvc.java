package test.arthall.con_node;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class testSvc {

    @Autowired
    private testMap testMap;

    public List<testModel> getTest(){
        return testMap.getTest();
    }

}
