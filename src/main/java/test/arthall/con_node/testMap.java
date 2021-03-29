package test.arthall.con_node;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface testMap {

        List<testModel> getTest();


}
