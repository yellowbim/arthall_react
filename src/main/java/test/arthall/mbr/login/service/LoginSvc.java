package test.arthall.mbr.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.arthall.mbr.login.map.LoginMap;
import test.arthall.mbr.login.model.LoginDao;

import java.util.List;

@Service
public class LoginSvc {

    @Autowired
    private LoginMap loginMap;

    public List<LoginDao> getMbrChk(LoginDao param){
        List<LoginDao> mbrInfo = loginMap.getMbrChk(param);

//        if (!("").equals(mbrInfo.getSeq())){
//        } else {
//            mbrInfo.setCode("1111");
//        }

        return  mbrInfo;
    }
}
