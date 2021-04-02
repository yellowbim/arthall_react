package test.arthall.mbr.login.map;

import org.apache.ibatis.annotations.Mapper;
import test.arthall.mbr.login.model.LoginDao;

import java.util.List;


@Mapper
public interface LoginMap {

    List<LoginDao> getMbrChk(LoginDao param);

}
