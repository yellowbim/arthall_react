package test.arthall.con_node;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;


@Controller
public class TestCtl {

    @Autowired
    private testSvc testSvc;

    @RequestMapping("/test")
    public String test1 (Model model){
        List<testModel> vo = testSvc.getTest();
        for (test.arthall.con_node.testModel testModel : vo) {
        }

        model.addAttribute("test",vo);
        return "/main";
    }
}
